
const height_text = document.querySelector(".height_text")
const weight_text = document.querySelector(".weight_text")
const height_value = document.querySelector(".height_value")
const weight_value = document.querySelector(".weight_value")
const display = document.querySelector(".text_area")
const showResult = document.querySelector(".showResult")

function bmiCalculator(){
     const height = parseInt(height_text.value);
     const weight = parseInt(weight_text.value);
     let bmi;
     height_value.textContent = `${height} cm`;
     weight_value.textContent = `${weight} kg`;
     
     bmi = (((weight) / (height ** 2)) * 10000).toFixed(2);

     display.innerHTML = `${bmi} Kgcm<sup>-2</sup>`;
     if ( bmi < 18.5){
        showResult.style.color = "red"
        showResult.innerText = `Your BMI is ${bmi}\nyou,re underweight, try to eat more`
     }
     else if ( bmi >= 18.5 && bmi <= 24.9){
        showResult.style.color = "green"
        showResult.innerText = `Your BMI is ${bmi}\nyou,re normal, maintain yourself`
     }
     else if ( bmi >= 25.0 && bmi <= 29.9){
        showResult.style.color = "red"
        showResult.innerText = `Your BMI is ${bmi}\nyou,re overweight, try to exercise more`
     }
     else if ( bmi >= 30.0 && bmi <= 34.9){
        showResult.style.color = "red"
        showResult.innerText = `Your BMI is ${bmi}\nyou,re obesed, you need to really watch your meals`
     }
     else if ( bmi >= 35.0 && bmi <= 39.9){
        showResult.style.color = "red"
        showResult.style.animation = "obesed 0.3s alternate-reverse 3"
        showResult.innerText = `Your BMI is ${bmi}\nyou,re severely obesed, you need consult a doctor`
     }
    //  console.log(showResult)
     
}

addEventListener("input", bmiCalculator)
