const arg = process.argv[2];
const num = parseInt(arg);

if(!isNaN(num)){
  console.log(`My number is: ${num}`);
} else {
  console.log('Not a number');
}