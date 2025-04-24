function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2
}

$(document).ready(function () {
    let display = $('#display');
    let operator = "";
    let leftSide = [];
    let rightSide = [];
    let operators = ["+", "-", "/", "*"]

    $('.buttons button').on('click', function () {
        let value = $(this).val();
        display.val(display.val() + value);

        let screen = display.val()

        $("#equal").click(function () {
            let displayArray = screen.split('');
            
            displayArray.forEach(function(e, i) {
                operators.forEach(function(op) {
                    if(e.includes(op)) {
                        leftSide = (displayArray.slice(0, i));
                        operator = displayArray[i]
                        rightSide = displayArray.slice(i + 1);
                    }
                })
            })

            let leftSideNumber = parseInt(leftSide.join(''))
            let rightSideNumber = parseInt(rightSide.join(''))
            
            if(operator === "+") {
                let result = add(leftSideNumber, rightSideNumber);
                display.val(result)
            } else if (operator === "-") {
                let result = subtract(leftSideNumber, rightSideNumber);
                display.val(result)
            }
        })

        $("#clear").click(function() {
            display.val('')
        })


        // if (value === 'C') {
        //     display.val('');
        // } else if (value === '=') {
        //     let result = eval(display.val());
        //     display.val(result);
        // } else {
        // }
    });
});
