const add = document.querySelector("#form-submit");
add.addEventListener("Click", ()=>{
    let num1 = document.querySelector("#value1").value;
    let num2 = document.querySelector("valuw2").value;
    let container = document.querySelector(".output");
    if((num1+num2)%2==0){
        let res = document.createElement("p");
        res.value= 'Sum of ' + num1 + " and "+ num2+ " is: " + (num1+num2);
        document.appendChild(res);
    }
    else {
        let res = document.createElement("p");
        res.value= 'Sum of ' + num1 + " and "+ num2+ " is: " + (num1+num2);
        document.appendChild(res);
    }
})