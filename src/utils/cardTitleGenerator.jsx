export  const cardTitleGenerator = (item) => {
  const firstChar = item.bmTitle.slice(0, 1).toUpperCase();
  const secondChar = item.bmTitle.slice(1, 2).toLowerCase();
  const cardTitle = firstChar + secondChar;
  return cardTitle
}