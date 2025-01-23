//누적시킴(쌓기)
const result = [1, 2, 3, 4, 5].reduce((acc, current) => {
  console.log({ acc, current });
  return acc + current;
});

const answer = "americano".split("a").reduce((a, c) => a + c);
