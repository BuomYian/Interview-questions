const captiizedSentence = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(captiizedSentence("my name is buomkuoth yian"));
