
var steps = process.argv;
var sum = 0;
for (i = 2; i < steps.length; i++) {
  sum = sum + +steps[i];
}
console.log(sum)

// official solutions
/* var result = 0

    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

console.log(result) */