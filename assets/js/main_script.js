console.log("Starting JS Script");
fetch('../json/travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  console.log("Ending JS Script");