function showResults(data) {
    document.querySelector('#gps-results').textContent = JSON.stringify(data);
}

function watch() {
    window.navigator.geolocation.watchPosition(
        ({ coords: { latitude, longitude, accuracy } }) => showResults({ latitude, longitude, accuracy }),
        ({ message }) => showResults({ error: message }),
        {
            maximumAge: 0,
            timeout: 60000,
        },
    );
}