var sum = 0;
//var args = process.argv.splice(2, process.argv.length);
//args.forEach(function(value, index){
//console.log("The value in consideration is : " + value);
//sum = sum + parseInt(value);
//sum = sum + value;
//})
//console.log(sum);

//Another optimized and simple implementation for the same can be as follows

for(i=2; i< process.argv.length; i++){
sum = sum + Number(process.argv[i]);
}
console.log(sum);
//Always try to seek out the simplest solution for your problem, 
//Life is as complicated as we make it.