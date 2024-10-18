function addNumber(){
    console.log("---------------------------");
    var OneNumber = parseInt(document.getElementById('numOne').value)
    var TwoNumber = parseInt(document.getElementById('numTwo').value)

    var addition = OneNumber+TwoNumber

    var output = `Output is ${addition}`
    //console.log("Data type of number one variable is ",typeof(OneNumber));
    document.getElementById('result').innerHTML = output
    //console.log(OneNumber+TwoNumber);
}

//when you run your webpage it will run first time your js file then HTML will pop up
//events  => which will happen on particular incident
//parseInt => to convert string to integer

//advance lab : multiplication, division, subtraction