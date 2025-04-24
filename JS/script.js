$(document).ready(function () {
    let display = $('#display');

    $('.buttons button').on('click', function () {
        let value = $(this).text();

        if (value === 'C') {
            display.val('');
        } else if (value === '=') {
            let result = eval(display.val());
            display.val(result);
        } else {
            display.val(display.val() + value);
        }
    });
});
