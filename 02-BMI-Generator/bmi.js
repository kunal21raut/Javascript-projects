const form= document.querySelector('form');
//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = 'Please give a valid Height'
    }

    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid Weight'
    }
    else{
        const bmi  = (weight /((height*height)/10000)).toFixed(2)
        //shows result 
        results.innerHTML = `<span>BMI is : ${bmi}</span>`;

        if(parseFloat(bmi) < 18.6){
            document.querySelector('#under-weight').style.color = 'red';
        }
        else if((parseFloat(bmi) > 18.6) && (parseFloat(bmi) <= 24.9)){
            document.querySelector('#normal').style.color = 'green';
        }
        else if(parseFloat(bmi) >= 25){
            document.querySelector('#over-weight').style.color = 'red';
        }
    }
})