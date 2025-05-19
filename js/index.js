window.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const data = {
            full_name: document.getElementById('username').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            extra_field: ""
        };
        const datajson = JSON.stringify(data);
        const url = 'https://www.superlender.co.ke/test/test-api';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: datajson
        };
        fetch(url, options)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
               if(data.success) {
                    alert('Your information has been submitted successfully!');
                    document.getElementById('username').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('phone').value = '';
                    document.getElementById('address').value = '';

                    console.log(data);
                } else {
                    alert(data.message);
                }
            })
            .catch(() => 
                alert('There was an error in processing your request. Kindly wait and try again later.', ));
    });
});


