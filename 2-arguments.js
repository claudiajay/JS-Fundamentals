const argumentsPassed = process.argv.slice(2);

if (argumentsPassed.length === 0) {
  console.log("No argument");
} else if (argumentsPassed.length === 1){
  console.log("Argument found");
} else {
  console.log("Arguments found");
}