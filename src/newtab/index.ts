import "./newtab.css";
import { getBirthday, getCurrentWeekNumber, getRandomItems } from "./utils";

const WEEKS_IN_LIFE = 3750;
const GRID_COLS = 75;
const GRID_ROWS = WEEKS_IN_LIFE / GRID_COLS;
const CELL_SIZE = 12;
const QUOTE_CATEGORIES = [
  "age",
  "change",
  "courage",
  "death",
  "dreams",
  "god",
  "happiness",
  "imagination",
  "life",
];
const QUOTE_LIMIT = 3;

const birthDateString = getBirthday();
const birthDate = new Date(birthDateString);


async function main() {
  const blockContainerEl = document.querySelector(
    ".blocks_container"
  ) as HTMLElement;

  blockContainerEl.style.width = `${GRID_COLS * CELL_SIZE}px`;
  blockContainerEl.style.height = `${GRID_ROWS * CELL_SIZE}px`;
  blockContainerEl.style.gridTemplateColumns = `repeat(${GRID_COLS},minmax(0,1fr))`;
  blockContainerEl.style.gridTemplateRows = `repeat(${GRID_ROWS},minmax(0,1fr))`;

  (document.querySelector(".quotes") as HTMLElement).style.width =
    `${GRID_COLS * CELL_SIZE}px`;

  const currentWeek = getCurrentWeekNumber(birthDate);

  Array.from({ length: WEEKS_IN_LIFE }).forEach((_, index) => {
    const blockEl = document.createElement("div");

    blockEl.classList.add("block");
    if (index < currentWeek) blockEl.classList.add("passed");
    if (index === currentWeek) blockEl.classList.add("current");
    if (index > currentWeek) blockEl.classList.add("ahead");

    blockContainerEl.appendChild(blockEl);
  });

  let currentQuoteIndex = 0;

  async function fetchQuotes() {
    const selectedCategories = getRandomItems(QUOTE_CATEGORIES, QUOTE_LIMIT);

    const quotes = [];

    const date = new Date();
    const dateId = `${date.getDate().toString().padStart(2)}-${(date.getMonth() + 1).toString().padStart(2)}-${date.getFullYear()}`;

    const storageQuotes = window.localStorage.getItem("storage-quotes");
    if (storageQuotes && JSON.parse(storageQuotes).date === dateId) {
      quotes.push(...JSON.parse(storageQuotes).quotes);
    } else {
      const quotesPromises = selectedCategories.map((category) =>
        fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            "X-Api-Key": "cUdtMgwvXfzw5mB35bJrew==sphfX9xcszYIcphX",
          },
        }).then((r) => r.json())
      );

      const INTERNAL__quotes = (await Promise.all(quotesPromises)).map((x) => {
        return x[0];
      });

      quotes.push(...INTERNAL__quotes);

      window.localStorage.setItem(
        "storage-quotes",
        JSON.stringify({ quotes: INTERNAL__quotes, date: dateId })
      );
    }

    document.querySelector(".quotes_skeleton")?.classList.add("hide");

    const quotesEl = document.querySelector(".quotes") as HTMLElement;
    quotesEl.classList.add("show");

    quotes.forEach((quote, idx) => {
      const quoteElString = `
    <div class="quote_card ${currentQuoteIndex === idx ? "show" : ""}">
            <div class="quote_card_body">
              <p class="quote">${quote.quote}</p>
            </div>
            <div class="quote_card_footer">
              <p class="quote_author">quote by <span>${quote.author}</span></p>
              <div class="quote_footer_controls">
                <button type="button" class="prev-quote" aria-label="previous quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="hsl(var(--secondary-foreground))"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
                    />
                  </svg>
                </button>
                <button type="button" class="next-quote" aria-label="next quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="hsl(var(--secondary-foreground))"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>`;

      quotesEl.insertAdjacentHTML("beforeend", quoteElString);
    });
  }

  await fetchQuotes();

  function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % QUOTE_LIMIT;
    console.log(`Next Quote Index: ${currentQuoteIndex}`);
    document.querySelectorAll(".quote_card").forEach((quoteEl, idx) => {
      if (idx === currentQuoteIndex) {
        quoteEl.classList.add("show");
      } else {
        quoteEl.classList.remove("show");
      }
    });
  }

  function prevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + QUOTE_LIMIT) % QUOTE_LIMIT;
    console.log(`Previous Quote Index: ${currentQuoteIndex}`);
    document.querySelectorAll(".quote_card").forEach((quoteEl, idx) => {
      if (idx === currentQuoteIndex) {
        quoteEl.classList.add("show");
      } else {
        quoteEl.classList.remove("show");
      }
    });
  }

  document
    .querySelectorAll("button.prev-quote")
    .forEach((el) => el.addEventListener("click", prevQuote));
  document
    .querySelectorAll("button.next-quote")
    .forEach((el) => el.addEventListener("click", nextQuote));
}

main();
