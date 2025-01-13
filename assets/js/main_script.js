let loadedData;

const resultsDiv = document.getElementById('results');
resultsDiv.style.visibility = "hidden"; // Initially hidden

// Fetch the JSON data
fetch('./assets/json/travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    loadedData = data;
  })
  .catch(error => console.error('Error:', error));

// Function to perform the search
function performSearch() {
  let searchQuery = document.getElementById('searchbarInput').value.trim().toLowerCase();
  let results = [];

  // Display a message in the results div if the search query is empty
  if (searchQuery === '') {
    resultsDiv.innerHTML = "<p>Please enter a search keyword.</p>";
    resultsDiv.style.visibility = "hidden"; // Hide the results div if no search query
    return;
  }

  // Regular expressions to match categories based on search input
  const beachRegex = /\bbeach(es)?\b/i;
  const templeRegex = /\btemple(s)?\b/i;
  const countryRegex = /\bcountr(y|ies)?\b/i;

  // Check if the search query matches any of the categories using RegEx
  if (beachRegex.test(searchQuery)) {
    results = results.concat(loadedData.beaches);
  }
  if (templeRegex.test(searchQuery)) {
    results = results.concat(loadedData.temples);
  }

  // Handle the case where the search query matches "country" or "countries"
  if (countryRegex.test(searchQuery)) {
    loadedData.countries.forEach(country => {
      if (country.name.toLowerCase().includes(searchQuery)) {
        // Loop over the cities and add each city with "city, country" format to the results
        country.cities.forEach(city => {
          results.push({
            name: `${city.name}, ${country.name}`, // Format: "city, country"
            description: city.description,
            imageUrl: city.imageUrl
          });
        });
      }
    });
  }

  // Display the results if available
  if (results.length > 0) {
    displayResults(results);
  } else {
    resultsDiv.innerHTML = "<p>No results found.</p>";
  }

  // Make results div visible
  resultsDiv.style.visibility = "visible";
}

// Search button event listener
document.getElementById('searchbarSearchButton').addEventListener('click', performSearch);

// Listen for the "Enter" key to trigger the search
document.getElementById('searchbarInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    performSearch(); // Trigger the search function when Enter is pressed
  }
});

// Clear button functionality
document.getElementById('searchbarClearButton').addEventListener('click', function() {
  document.getElementById('searchbarInput').value = ''; // Clear search input
  resultsDiv.innerHTML = ''; // Clear previous results
  resultsDiv.style.visibility = "hidden"; // Hide results div when cleared
});

// Display results on the page
function displayResults(results) {
  resultsDiv.innerHTML = ''; // Clear previous results

  // Create a result item for each found result
  results.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    let name, imageUrl, description;

    name = item.name; // "city, country"
    description = item.description;
    imageUrl = item.imageUrl;

    // Add the result item to the results div
    resultItem.innerHTML = `
      <span class="result-img"><img src="${imageUrl}" alt="${name}" /></span>
      <div class="result-text">
        <h3>${name}</h3>
        <p>${description}</p>
      </div>
    `;

    resultsDiv.appendChild(resultItem);
  });
}
