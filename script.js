"use strict"

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculate = document.querySelector(".calculate");
const resetButton = document.querySelector(".resetbutton");
const showResult = document.querySelector(".showResult");
// const h = height.value;
// const w = weight.value
let ans;

function result (){
    ans = (weight.value/(height.value * height.value) * 10000).toFixed(1);
    if (weight.value === "" || height.value === ""){
            showResult.innerText = "Be like your papa dey mad, oya enter details";
            showResult.style.color = "red";
        }
      else{
        if ( ans < 18.5 ){
            showResult.style.color = "red"
            showResult.innerText = `Your BMI is ${ans}\nyou're underweight, stop suffering`
        }
        else if (ans >= 18.5 && ans <= 24.9){
            showResult.style.color = "green"
            showResult.innerText = `Your BMI is ${ans}\nYou're normal, sapa isn't your landlord`
        }
        else if (ans >= 25.0 && ans <= 29.9){
            showResult.style.color = "red"
            showResult.innerText = `Your BMI is ${ans}\nYou're overweight, you be yahoo boy bros`
        }
        else if (ans >= 30.0 && ans <= 34.9){
            showResult.style.color = "red"
            showResult.innerText = `Your BMI is ${ans}\nYou're obesed, you be ritualist oga`
        }
        else if (ans >= 35.0 && ans <= 39.0){
            showResult.style.color = "red"
            showResult.innerText = `Your BMI is ${ans}\nYou're severely obesed, take it easy boss.... Try hit the gym`
        }
        else{
            showResult.style.color = "black"
            showResult.innerText = `Your BMI is ${ans}\nYou're no longer normal, go on hunger strike`
        }
      }
        // showResult.innerText = ans; 
        // showResult.style.color = 'green';
        // console.log(ans)
        // console.log(height.value, weight.value)
}
    

calculate.addEventListener("click", result);99


resetButton.addEventListener("click", () =>{
    weight.value = ""
    height.value = ""
    showResult.innerText = ""
});
