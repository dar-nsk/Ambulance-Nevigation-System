document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([28.6353, 77.2249], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const hospital = L.marker([28.6139, 77.2090]).addTo(map).bindPopup("Hospital");
    const ambulance = L.marker([28.6353, 77.2249]).addTo(map).bindPopup("Ambulance").openPopup();

    L.Routing.control({
        waypoints: [
            L.latLng(28.6353, 77.2249), // Starting point
            L.latLng(28.6139, 77.2090)  // Destination
        ],
        routeWhileDragging: true
    }).addTo(map);
});
