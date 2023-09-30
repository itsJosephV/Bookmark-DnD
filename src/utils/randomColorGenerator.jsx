export const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 128) + 128;
  const green = Math.floor(Math.random() * 128) + 128;
  const blue = Math.floor(Math.random() * 128) + 128;

  const color = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

  return color;
};
