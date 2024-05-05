export const randomNumber = () => {
  let randomNumber = "";
  while (randomNumber.length < 16) {
    let part = Math.random().toString().slice(2, 12);
    randomNumber += part;
    if (randomNumber.length > 16) {
      randomNumber = randomNumber.slice(0, 16);
    }
  }
  return randomNumber;
};
