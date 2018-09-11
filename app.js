document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // only one input, making it more specific with [type num]
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    // instead of hard coding, grabing API and dynamic #
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    // after receivng the data we
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';

            if(response.type === 'success') {
                // loop through value
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}