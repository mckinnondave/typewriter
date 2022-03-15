
const sentence = "hello there from lighthouse labs";

let count = 0;
let i = 0;

for (const char of sentence) {
  count += 100;
  setTimeout(() => {
    process.stdout.write(char);
    i++;
    if (i === sentence.length) {
      process.stdout.write("\n");
    }
  }, 1000 + count);
}