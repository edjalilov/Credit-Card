$(document).ready(function () {
    $('.card-number__input, #card-cvv').numeric();
    $('.card-number__input').on('input', function () {
        $('.number span:nth-child(' + $(this).index() + ')').text($(this).val());
        if ($(this).val().length > 3) {
            $(this).next().focus();
        }
        if ($(this).val().length < 1) {
            $(this).prev().focus();
        }
        if ($(this).val().length > 3 && $(this).index() == 4) {
            $('#card-holder').focus();
        }
    });

    $('#card-holder').on('input', function () {
        $('.card-holder div').text($(this).val());
    });

    $('#card-expiration-month').on('input', function () {
        $('.month').text($(this).val() + ' /');
    });
    $('#card-expiration-year').on('input', function () {
        $('.year').text($(this).val());
    });

    $('#card-cvv').on('focus', function () {
        $('.credit-card-box').addClass('hover');
    }).on('blur', function () {
        $('.credit-card-box').removeClass('hover');
    }).on('input', function () {
        $('.cvv div').text($(this).val());
    });

});