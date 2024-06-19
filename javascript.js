const button = document.querySelectorAll("button");
const display = document.querySelector(".display");

button.forEach((button) => {
    button.addEventListener('mousedown', () => {


        for (let i = 0; i < 10; i++) {
            if (button.id == i) {
                display.textContent += i;
            }
        }

        if (button.id == "point") {
            if (display.textContent.includes(".")){

            }
            else
            display.textContent += "."; 
        }

        if (button.id == "del") {
            display.textContent = (display.textContent).slice(0, (display.textContent.length - 1));
        }

        if (button.id == "ac") {
            display.textContent = "";
        }

        if (button.id == "nSign"){
            if (display.textContent.includes("-")){
                display.textContent = (display.textContent).slice(1, (display.textContent.length));
            }
            else
            display.textContent = "-" + display.textContent;
        }

    });
});