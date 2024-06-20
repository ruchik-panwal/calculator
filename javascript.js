
const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
const pos = document.querySelector(".pos");
let num1 = "", num2 = 0, op = 0;
let toggle = 0;

// The translucent signs on the screen


const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cross = document.querySelector(".cross");
const divide = document.querySelector(".divide");
const fact = document.querySelector(".factScreen");
const root = document.querySelector(".rootScreen");
const pow = document.querySelector(".powScreen");
const equal = document.querySelector(".equalScreen");
const screenSign = document.querySelectorAll("#screenSign");

array = [];

input();

function input() {
    button.forEach((button) => {
        button.addEventListener('mousedown', () => {

            if(toggle == 1){
                display.textContent = "";
                toggle = 0;
                
                screenSign.forEach((screenSign) => screenSign.setAttribute("style", "opacity : 0.1;"))
            }

            for (let i = 0; i < 10; i++) {
                if (button.id === i.toString()) {
                    display.textContent += i;
                }
            }

            if (button.id == "del") {
                display.textContent = (display.textContent).slice(0, (display.textContent.length - 1));
            }

            if (button.id == "ac") {
                display.textContent = "";
            }

            if (button.id == "point") {
                if (display.textContent.includes(".")) {

                }
                else
                    display.textContent += ".";
            }


            if (button.id == "nSign") {
                if (display.textContent.includes("-")) {
                    display.textContent = (display.textContent).slice(1, (display.textContent.length));
                }
                else
                    display.textContent = "-" + display.textContent;
            }

            if (button.className == "operator") {

                if (num1 != "") {
                    num2 = display.textContent;
                    display.textContent = operate(+num1, +num2, op);
                    num1 = display.textContent;
                    op = button.id;
                }
                else {
                    num1 = display.textContent;
                    console.log(num1);
                    op = button.id;
                }

                if(button.id == "add"){
                    plus.setAttribute("style", "opacity : 1;")
                }
                if(button.id == "min"){
                    minus.setAttribute("style", "opacity : 1;")
                }
                if(button.id == "div"){
                    divide.setAttribute("style", "opacity : 1;")
                }
                if(button.id == "mul"){
                    cross.setAttribute("style", "opacity : 1;")
                }
                if(button.id == "equal"){
                    equal.setAttribute("style", "opacity : 1;")
                }
                toggle = 1;
            }
        });
    });
}


function operate(n1, n2, op) {

    if (op === "add") {
        return n1 + n2;
    }

    if (op === "min") {
        return n1 - n2;
    }

    if (op === "mul") {
        return n1 * n2;
    }

    if (op === "div") {
        return n1 / n2;
    }
}

