const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log("No Arguement")
} else {
  console.log(firstArg);
}