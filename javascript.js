
const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
const pos = document.querySelector(".pos");
let num1 = "", num2 = 0, op = 0;
let toggle = 0, count = 0;

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
const posF = document.querySelector(".posFlex");

array = [];

input();

function input() {
    button.forEach((button) => {
        button.addEventListener('mousedown', () => {

            if (button.id == "ac") {
                num1 = num2 = 0;
                display.textContent = "";
                pos.textContent = "00";
                toggle = 1;
                count = -1;

            }


            if (toggle == 1) {
                display.textContent = "";
                toggle = 0;

                screenSign.forEach((screenSign) => screenSign.setAttribute("style", "opacity : 0.1;"));
                if (count < 5) {
                    count++;
                    posF.setAttribute("style", "opacity : 1;");
                }
                pos.textContent = "0" + count;

                if (pos.textContent == "00")
                    posF.setAttribute("style", "opacity : 0.1;");


            }

            for (let i = 0; i < 10; i++) {
                if (button.id === i.toString()) {
                    display.textContent += i;
                }
            }

            if (button.id == "del") {
                display.textContent = (display.textContent).slice(0, (display.textContent.length - 1));
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

            if (button.className == "operator" || button.className == "smallMath") {

                if (num1 != "") {
                    num2 = display.textContent;
                    display.textContent = operate(+num1, +num2, op);
                    num1 = display.textContent;
                    op = button.id;
                }
                else {
                    num1 = display.textContent;
                    op = button.id;
                }

                screenToggle(button.id);
                toggle = 1;

                console.log(num1);
                console.log(num2);
            }
        });
    });
}

function screenToggle(sign) {


    if (sign == "add") 
        plus.setAttribute("style", "opacity : 1;");
    
    if (sign == "min") 
        minus.setAttribute("style", "opacity : 1;");
    
    if (sign == "div") 
        divide.setAttribute("style", "opacity : 1;");
    
    if (sign == "mul") 
        cross.setAttribute("style", "opacity : 1;");
    
    if (sign == "equal") 
        equal.setAttribute("style", "opacity : 1;");
    
    if (sign == "pow") 
        pow.setAttribute("style", "opacity : 1;");
    
    if(sign == "sqrt")
        root.setAttribute("style", "opacity : 1;");

}

function operate(n1, n2, op) {

    if (op === "add")
        return n1 + n2;

    if (op === "min")
        return n1 - n2;

    if (op === "mul")
        return n1 * n2;

    if (op === "div")
        return n1 / n2;

    if (op === "equal")
        return num1;

    if (op === "pow")
        return Math.pow(num1, num2);


}

