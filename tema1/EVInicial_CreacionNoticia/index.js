$(document).ready(() => {

    var textoCaptcha;
    var num1 = Math.random() * (9 - 1) + 1;
    var num2 = Math.random() * (9 - 1) + 1;
    textoCaptcha = '¿Cuanto es ' + num1 + ' + ' + num2 + '?';
    $('#textoCaptcha').text(textoCaptcha);

    $(document).on('click', '#genSlug', function () {
        resetFields();

        if ($('#titulo').val() == '') {
            $('#titulo').addClass('is-invalid');
        } else {
            var tituloSlugeado = generarSlug();
            $('#slug').val(tituloSlugeado);
        }
    });

    function resetFields() {
        $('#titulo').removeClass('is-invalid');
    }

    function generarSlug() {
        var result = '';
        var tituloToSlug = $('#titulo').val().toLowerCase();
        var tituloArray = tituloToSlug.split('');

        for (var letra of tituloArray) {
            if (letra == ' ') {
                result += '-';
            } else {
                result += letra;
            }
        }

        return result;
    }

    function generarCaptcha() {


        var resulCaptcha = num1 + num2;
        var user = $('#captcha').val();

        if (resulCaptcha == user) {

        } else {

        }
    }
});