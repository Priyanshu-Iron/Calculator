const inputBox = document.getElementById('inputBox')
const buttons = document.querySelectorAll('.buttons')

let input = "";

buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;

        if (buttonText === 'C') {
            input = "";
            inputBox.value = input;
        } else if (buttonText === '='){
            try {
                input = eval(input);
                inputBox.value = input;
            } catch (error) {
                inputBox.value = "Error";
            }          
        } else{
            input += buttonText;
            inputBox.value = input;
        }
    });
});