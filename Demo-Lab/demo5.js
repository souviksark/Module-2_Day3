console.log("Task 1");

//asynchronous operation
setTimeout(function() {
    console.log("Task 2 is comming after delay");
},3000)

console.log("Task 3");

//js is going in sequence
//it will come at the end

//c,c++ => wait for 3 seconds to complete this

//async await ReactJS
//apis are coming from server take some time 200ms, 300ms 
//entire webpage is comming up

// first this entire API will load for entire program it will be stored browser's cache memory
//second page of website it will take time => load the HTML content
