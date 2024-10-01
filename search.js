const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const historyContainer = document.getElementById('historyContainer');
let searchHistory = [];

// Function to render search history
function renderHistory() {
    historyContainer.innerHTML = '';
    searchHistory.forEach((item) => {
        const div = document.createElement('div');
        div.textContent = item;
        div.onclick = () => performSearch(item);
        historyContainer.appendChild(div);
    });
}

// Function to perform search
function performSearch(query) {
    if (query) {
        // Add query to search history if not already present
        if (!searchHistory.includes(query)) {
            searchHistory.push(query);
            renderHistory();
        }
        // Redirect to search results page (replace 'results.html' with your actual page)
        window.location.href = `results.html?search=${encodeURIComponent(query)}`;
    }
}

// Search button click event
searchButton.onclick = () => {
    const query = searchInput.value.trim();
    performSearch(query);
};

// Search input event (to support 'Enter' key)
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        performSearch(query);
    }
});

// Load search history from localStorage if available
window.onload = () => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
        searchHistory = JSON.parse(storedHistory);
        renderHistory();
    }
};

// Save search history to localStorage
window.onbeforeunload = () => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
};
