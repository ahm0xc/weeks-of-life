function isValidDate(dateString: string) {
  const regEx = /^\d{2}-\d{2}-\d{4}$/;
  if (!dateString.match(regEx)) return false;
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

export function askBirthday() {
  const birthday = window.prompt(
    "Please enter your birthday in the format MM-DD-YYYY"
  );
  if (!birthday) return askBirthday();
  const isBirthdayValid = isValidDate(birthday);
  if (!isBirthdayValid) {
    window.alert("Invalid date format. Please try again.");
    return askBirthday();
  }

  return birthday;
}

export function getBirthday() {
  const birthday = window.localStorage.getItem("birthday");
  if (!birthday) {
    const newBirthday = askBirthday();
    window.localStorage.setItem("birthday", newBirthday);
    return newBirthday;
  }
  return birthday;
}

export function getCurrentWeekNumber(birthDate: Date): number {
  const currentDate = new Date();
  const startDate = new Date(birthDate);

  const timeDiff = currentDate.getTime() - startDate.getTime();
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const currentWeek = Math.floor(timeDiff / millisecondsPerWeek);
  return currentWeek;
}

export function getRandomItems<T>(array: T[], numberOfItems: number): T[] {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  }
  if (numberOfItems > array.length) {
    throw new Error("Number of items to pick exceeds array size");
  }

  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfItems);
}
