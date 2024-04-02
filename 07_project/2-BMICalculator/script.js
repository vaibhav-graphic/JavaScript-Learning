const form = document.querySelector("form");

form.addEventListener( "submit", (e) => {
    e.preventDefault()//stop post and mapping
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `plz enter a number ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result = `plz enter a number ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi <= 18.6){
            result.innerHTML = `<span> Under Weight : ${bmi}</span>`
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span> Normal Range : ${bmi}</span>`
        }else{
            result.innerHTML = `<span> Overweight : ${bmi}</span>`

        }
    }
});