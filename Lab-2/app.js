//prompt => which will take input (ok, cancel)
//confirm => are you sure you want to conifrm (yes or no)
// asking a user their name we will welcome them to our Application

function welcomeMsg(){
    let user_name = prompt("Enter your name :")
    console.log(`Enter user's name is ${user_name}`);

    let confirmation = confirm(`Do you agree ${user_name} to our terms and conditions `)
    //1 way
    if(confirmation == true){
        alert(`welcome to our ABC app ${user_name}`)
    }else{
        alert("you didnt agree to our terms and conditions")
    }
    //2way
    /* if(confirmation)
        alert(`welcome to our ABC app ${user_name}`)
    else
        alert("you didnt agree to our terms and conditions") */
}



//Advance lab
//you need to take two inputs of two numbers you need to make the addition of it


/* var 
let  */

//block level of keywords

function myFunc(){
    var userName = "Akshay"
    userName = "Akshay2"
    console.log(`user's name is ${userName}`);
}


function myConstFunc(){
    const userName = "Akshay"
    userName = "Akshay2"
    console.log(`user's name is ${userName}`);
}


function myLetFunc(){
    let userName = "Akshay"
    userName = "Akshay2"
    console.log(`user's name is ${userName}`);
}
//console.log(`outside function ${userName}`);

//myFunc()
//myConstFunc()
myLetFunc()

//var  => entire function scope
// let  => blocked scope only 

//when i am creating while, for loop => let keyword {}
// var keyword general variable  you are going to update the value in future

function testingScopes(){
    var varVaraible = 10
    let letVariable = 20

    if(true){
        var varVaraible = 30
        let letVariable = 40
        console.log("--------------inside if condition------------");
        console.log(varVaraible); //output 30
        console.log(letVariable); // output 40
    }
    console.log("--------------outside if condition------------");
    console.log(varVaraible); //output 30
    console.log(letVariable); // output 20
}
testingScopes()

//hoisting concept

console.log(myVariable);
//console.log(myVariable2);

var myVariable = "normal variable"
console.log(myVariable);

//variables js will first take all the variables in their compiler
// instead it will initalize the variable
// js will scan this app.js file will look for variables presnt it will initiliaze them first
// start executing program one by one

//re assigning the value is not possible with const keyword
//accessing variable outside block is not possible var, let, const
// block = {}

// let variable is block scope {} => trying to modify it will not work
// var variable is multi scope {{{}}} => trying to modify it will work
