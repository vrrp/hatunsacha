// Initialize the map
var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Example CSV data (normally, you'd fetch this from an actual file)
const csvData = `
location,lat,lng,value
New York,40.7128,-74.0060,100
London,51.5074,-0.1278,150
Tokyo,35.6895,139.6917,200
Sydney,-33.8688,151.2093,180
Rio de Janeiro,-22.9068,-43.1729,120
`;

// Parse CSV data
function parseCSV(data) {
    const rows = data.trim().split('\n').slice(1);
    return rows.map(row => {
        const [location, lat, lng, value] = row.split(',');
        return { location, lat: parseFloat(lat), lng: parseFloat(lng), value: parseFloat(value) };
    });
}

const locations = parseCSV(csvData);

// Add markers to the map
locations.forEach(loc => {
    L.marker([loc.lat, loc.lng]).addTo(map)
        .bindPopup(`<b>${loc.location}</b><br>Value: ${loc.value}`);
});

// Bar chart setup
const ctx = document.getElementById('barChart').getContext('2d');
const labels = locations.map(loc => loc.location);
const data = locations.map(loc => loc.value);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Values by Location',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

