let loadedData = {};

// Get references to the necessary DOM elements
const resultsDiv = document.getElementById('results');
const noResultMessage = document.getElementById('no-result');
const keywordMessage = document.getElementById('keyword-message');

// Initialize visibility
initializeVisibility();

// Fetch the JSON data
fetch('./assets/json/travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    loadedData = data;
  })
  .catch(error => console.error('Error loading the data:', error));

// Initialize event listeners
initializeEventListeners();

// Initialize all event listeners
function initializeEventListeners() {
  // Event listener for the "Search" button
  document.getElementById('searchbarSearchButton').addEventListener('click', performSearch);
  
  // Event listener for the "Enter" key
  document.getElementById('searchbarInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      performSearch();  // Trigger the search function when Enter is pressed
    }
  });
  
  // Event listener for the "Clear" button
  document.getElementById('searchbarClearButton').addEventListener('click', clearSearch);
}

// Initialize visibility of elements
function initializeVisibility() {
  resultsDiv.style.visibility = "hidden";
  noResultMessage.style.visibility = "hidden";
  keywordMessage.style.visibility = "hidden";
}

// Perform the search when the user clicks the "Search" button or presses "Enter"
function performSearch() {
  const searchQuery = getSearchQuery();
  
  if (searchQuery === '') {
    showEmptyQueryMessage();
    return;
  }

  const results = searchResults(searchQuery);
  handleResultsVisibility(results);
}

// Get the value of the search query (normalized to lowercase)
function getSearchQuery() {
  return document.getElementById('searchbarInput').value.trim().toLowerCase();
}

// Show the message when the query is empty
function showEmptyQueryMessage() {
  resultsDiv.style.visibility = "visible";
  noResultMessage.style.visibility = "hidden";
  keywordMessage.style.visibility = "visible";
  resultsDiv.innerHTML = '';
}

// Search results based on the query
function searchResults(searchQuery) {
  let results = [];

  // Check for beaches, temples, and countries
  if (searchQuery.includes('beach')) {
    results = results.concat(loadedData.beaches);
  }

  if (searchQuery.includes('temple')) {
    results = results.concat(loadedData.temples);
  }

  // Check for "countr" to return all cities
  if (searchQuery.includes('countr')) {
    results = results.concat(searchAllCities());
  } else {
    // If it's not "countr", check if it's a specific country or city
    results = results.concat(searchCitiesAndCountries(searchQuery));
    
    // Check if the query matches a specific country in the beach or temple data
    results = results.concat(searchBeachesAndTemplesForCountry(searchQuery));
  }

  return results;
}

// Search through all cities globally
function searchAllCities() {
  let allCities = [];
  loadedData.countries.forEach(country => {
    country.cities.forEach(city => {
      allCities.push({
        name: `${city.name}`,
        description: city.description,
        imageUrl: city.imageUrl
      });
    });
  });
  return allCities;
}

// Search through cities and countries based on the query
function searchCitiesAndCountries(searchQuery) {
  let results = [];

  // First, search for matching countries
  loadedData.countries.forEach(country => {
    if (country.name.toLowerCase().includes(searchQuery)) {
      // If the country matches, include its cities
      country.cities.forEach(city => {
        results.push({
          name: `${city.name}`,
          description: city.description,
          imageUrl: city.imageUrl
        });
      });
    } else {
      // Also check for city matches inside this country
      country.cities.forEach(city => {
        if (city.name.toLowerCase().includes(searchQuery)) {
          results.push({
            name: `${city.name}`,
            description: city.description,
            imageUrl: city.imageUrl
          });
        }
      });
    }
  });

  return results;
}

// Search through beaches and temples for a specific country
function searchBeachesAndTemplesForCountry(searchQuery) {
  let results = [];

  // Check for country in beaches
  loadedData.beaches.forEach(beach => {
    if (beach.name.toLowerCase().includes(searchQuery)) {
      results.push(beach);
    }
  });

  // Check for country in temples
  loadedData.temples.forEach(temple => {
    if (temple.name.toLowerCase().includes(searchQuery)) {
      results.push(temple);
    }
  });

  return results;
}

// Handle the visibility of results and messages
function handleResultsVisibility(results) {
  resultsDiv.style.visibility = "visible";
  
  if (results.length > 0) {
    displayResults(results);
    noResultMessage.style.visibility = "hidden";
  } else {
    noResultMessage.style.visibility = "visible";
    resultsDiv.innerHTML = '';
  }
}

// Display the results on the page
function displayResults(results) {
  resultsDiv.innerHTML = ''; // Clear any previous results
  results.forEach(item => {
    const resultItem = createResultItem(item);
    resultsDiv.appendChild(resultItem);
  });
}

// Create a result item element for each found result
function createResultItem(item) {
  const resultItem = document.createElement('div');
  resultItem.classList.add('result-item');
  resultItem.innerHTML = `
    <span class="result-img"><img src="${item.imageUrl}" alt="${item.name}" /></span>
    <div class="result-text">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
  `;
  return resultItem;
}

// Clear the search input and hide all messages and results
function clearSearch() {
  document.getElementById('searchbarInput').value = '';
  resultsDiv.style.visibility = "hidden";
  noResultMessage.style.visibility = "hidden";
  keywordMessage.style.visibility = "hidden";
  resultsDiv.innerHTML = '';
}
