//advance data types 
//array => where we can store mutiples elements
//C - C++ same type of element
//js you can store multi types of elements
// array []
// how to differentiate ',' to seprate elements
// index starts from 0
//rollno 12 to 65 ?
//LILO

var rollNos = [12,56,78,90,56,76,54,32]

console.log(rollNos[0]);
//how to add another element [INSERT]
rollNos.push(999)
rollNos.pop()

//to sort arrays
rollNos.sort(((a, b) => a - b))

console.log(rollNos);

var userDetail = ["Akhay",19,false,"Gujarat"]
console.log(userDetail[3]);
//i want to print my state Gujarat

//to update any element value we can assign them
//add "male" 




userDetail[1] = 20
//to revers an element
userDetail.reverse()
console.log(userDetail);


