function showResults(data) {
    document.querySelector('#gps-results').textContent = JSON.stringify(data);
}

function watch() {
    window.navigator.geolocation.watchPosition(
        ({
            coords: { latitude, longitude, accuracy },
            timestamp,
        }) => showResults({ latitude, longitude, accuracy, date: new Date(timestamp).toLocaleString() }),
        ({ message }) => showResults({ error: message }),
        {
            maximumAge: 0,
            timeout: 60000,
            enableHighAccuracy: true,
        },
    );
}