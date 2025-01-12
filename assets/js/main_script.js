let loadedData;

// Fetch the JSON data
fetch('./assets/json/travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    loadedData = data;
  })
  .catch(error => console.error('Error:', error));

// Search button event listener
document.getElementById('searchbarSearchButton').addEventListener('click', function() {
  let searchQuery = document.getElementById('searchbarInput').value.trim().toLowerCase();
  let results = [];

  // Return early if the search bar is empty
  if (searchQuery === '') {
    alert("Please enter a search keyword.");
    return;
  }

  // Search for 'beach' or 'beaches'
  if (searchQuery.includes('beach')) {
    results = results.concat(loadedData.beaches);
  }

  // Search for 'temple' or 'temples'
  if (searchQuery.includes('temple')) {
    results = results.concat(loadedData.temples);
  }

  // Search for 'country' or 'countries'
  if (searchQuery.includes('country') || searchQuery.includes('countries')) {
    results = results.concat(loadedData.countries);
  }

  // Display the results
  if (results.length > 0) {
    displayResults(results);
  } else {
    document.getElementById('results').innerHTML = "No results found.";
  }
});

// Clear button functionality
document.getElementById('searchbarClearButton').addEventListener('click', function() {
  document.getElementById('searchbarInput').value = ''; // Clear search input
  document.getElementById('results').innerHTML = ''; // Clear previous results
});

// Display results on the page
function displayResults(results) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  // Create a result item for each found result
  results.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    let name, imageUrl, description;

    // Handle results that contain 'cities' (for countries with cities)
    if (item.cities) {
      name = item.name;
      description = item.cities.map(city => city.description).join('<br>');
      imageUrl = item.cities[0].imageUrl;
    }
    // Handle results that don't contain 'cities' (beaches or temples)
    else if (item.name && item.imageUrl) {
      name = item.name;
      description = item.description;
      imageUrl = item.imageUrl;
    }

    // Add the result item to the results div
    resultItem.innerHTML = `
      <h3>${name}</h3>
      <img src="${imageUrl}" alt="${name}" />
      <p>${description}</p>
    `;

    resultsDiv.appendChild(resultItem);
  });
}
