let watcherId;

function showResults(data) {
    document.querySelector('#gps-results').textContent = JSON.stringify(data);
}

function watch() {
    if (!watcherId) {
        window.navigator.geolocation.watchPosition(
            data => showResults(data),
            error => showResults(error),
            {
                maximumAge: 0,
                timeout: 60,
            },
        );
    }
}