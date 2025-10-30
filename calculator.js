let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = '';
let mode = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (eventObject) => {
        if (eventObject.target.innerText === '=') {
            string = eval(string);
        }
        else if (eventObject.target.innerText == 'AC') {
            string = '';
        }
        else if (eventObject.target.innerText == 'DEL') {
            string = string.slice(0, -1); // removes the last character
        }
        else if ((eventObject.target.innerText == 'Dark Mode') || (eventObject.target.innerText == 'Light Mode') ) {
            let body = document.querySelector('body');
            let container = document.getElementById('container');

            if (mode == 0) {
                body.style.backgroundColor = 'rgb(48, 40, 40)';
                container.style.backgroundColor = 'grey';
                mode = 1;
                eventObject.target.innerText = 'Light Mode';
            }
            else {
                body.style.backgroundColor = '#f0f0f0';
                container.style.backgroundColor = 'white';
                mode=0;
                eventObject.target.innerText = 'Dark Mode';
            }
        }
        else {
            string += eventObject.target.innerText;
        }
        input.value = string
    })
})

