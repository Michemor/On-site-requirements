$( document ).ready(() => {
    $("button").click(() => {
    const username = $('#username').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const address = $('#address').val();

    const body = {
        full_name: username,
        email: email,
        phone: phone,
        address: address,
        extra_field: ""
    };

    $.ajax({
        url: "https://www.superlender.co.ke/test/test-api",
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: () => {
        alert('Submitted Successfully');
        $('#username').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#address').val('');
    },
    });
    });
});