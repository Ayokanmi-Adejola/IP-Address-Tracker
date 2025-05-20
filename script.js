// DOM Elements
const form = document.getElementById('search-form');
const input = document.getElementById('ip-input');
const ipAddressElement = document.getElementById('ip-address');
const locationElement = document.getElementById('location');
const timezoneElement = document.getElementById('timezone');
const ispElement = document.getElementById('isp');
const errorMessage = document.getElementById('error-message');

// Map initialization
let map = null;
let marker = null;

// Initialize the map
function initMap(lat = 51.505, lng = -0.09) {
    // If map already exists, remove it and create a new one
    if (map !== null) {
        map.remove();
    }

    // Create map
    map = L.map('map').setView([lat, lng], 13);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom icon
    const customIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [46, 56],
        iconAnchor: [23, 56],
    });

    // Add marker
    marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
}

// Update UI with IP data
function updateUI(data) {
    ipAddressElement.textContent = data.ip;
    locationElement.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    timezoneElement.textContent = `UTC ${data.location.timezone}`;
    ispElement.textContent = data.isp;

    // Update map
    initMap(data.location.lat, data.location.lng);
}

// Fetch IP data
async function fetchIPData(ipAddress = '') {
    try {
        // Clear any previous error messages
        errorMessage.textContent = '';

        // Show loading state
        document.body.classList.add('loading');

        // Get API key from config.js
        // If config is not available, use a placeholder
        const apiKey = (typeof config !== 'undefined') ? config.apiKey : 'YOUR_API_KEY_HERE';

        // Determine if input is domain or IP
        const searchParam = ipAddress ?
            (ipAddress.match(/^[0-9.]+$/) ? `ipAddress=${ipAddress}` : `domain=${ipAddress}`) :
            '';

        // Fetch data
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${searchParam}`);

        if (!response.ok) {
            throw new Error('Failed to fetch IP data');
        }

        const data = await response.json();

        // Update UI with data
        updateUI(data);
    } catch (error) {
        console.error('Error:', error);
        errorMessage.textContent = 'Error fetching data. Please try again.';
    } finally {
        // Hide loading state
        document.body.classList.remove('loading');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize map with default location
    initMap();

    // Get user's IP on initial load
    fetchIPData();
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ipAddress = input.value.trim();

    if (ipAddress) {
        fetchIPData(ipAddress);
    }
});
