const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political';


document.getElementById('joke-button').addEventListener('click', async () => {
     document.getElementById('joke-button').style.backgroundColor = 'white';
        document.getElementById('joke-button').style.color ='black';
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let data = await response.json(); 

        if (data.type === 'single') {
            document.getElementById('joke-result').innerHTML = `<p>${data.joke}</p>`;
        } else {
            document.getElementById('joke-result').innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
        }
        document.getElementById('joke-result').style.border = '1px solid rgba(255, 255, 255, 0.304)';
        document.getElementById('joke-result').style.backgroundColor = 'rgba(255, 255, 255, 0.304)';
         document.getElementById('joke-result').style.color = 'black';


        } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke-result').innerHTML = `<p>Oops! Couldn't fetch a joke.</p>`;
    }
});

