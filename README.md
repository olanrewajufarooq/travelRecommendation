# Travel Recommendation Project

This project is a part of a JavaScript learning experience in the IBM JavaScript Programming Essentials course on [Coursera](https://www.coursera.org/learn/javascript-programming-essentials/). It leverages HTML, CSS, and JavaScript to build a simple travel recommendation tool. The tool allows users to search for various travel destinations such as beaches, temples, and countries, and displays relevant results dynamically.

[![View Deployed Site](https://img.shields.io/badge/View-Site-blue?style=for-the-badge)](https://olanrewajufarooq.github.io/travelRecommendation/)

## Tools & Technologies Learned

### HTML:
- Basic structure of a webpage.
- Forms and input fields.

### CSS:
- Layouts (Flex, Blocks).
- Absolute Positioning for elements.
- Styling for dynamic elements (e.g., results, messages).
- Custom styling for hover effects and transitions.

### JavaScript:
- **Dynamic Event Handling**: Adding event listeners to elements and handling user input events (click, keypress).
- **Fetch API**: Fetching and handling data from a local JSON file.
- **Search Functionality**: Implementing search logic for different keywords such as "country", "beach", "temple", and more.
- **Regular Expressions**: Used for matching variations of search keywords like plurals or partial words.

## Features

- **Search Functionality**: 
  - The search allows the user to type in keywords related to travel destinations.
  - The user can search for keywords such as "beach", "temple", "country", and their plural variations.
  - Specific country names (e.g., Saudi Arabia, Brazil) and their associated cities (e.g., Makkah, Medina, Rio de Janeiro) can also be searched. More details in [JSON File](./assets/json/travel_recommendation_api.json).
    
- **Desktop-Only Design**: 
  - The project is designed and optimized strictly for desktop use, and does not include responsive design for mobile views.

- **No Server-Side Implementation**: 
  - This project uses static files only. The search functionality relies on data fetched from a local JSON file, and there is **no server-side implementation** or back-end logic included. The project runs entirely on the client-side.

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in a desktop browser.
3. Type a search keyword such as "beach", "temple", or the name of a country or city in the search bar.
4. Click the "Search" button to view the results.
5. Explore the About and Contact page.

## Known Issues

- The project is **not designed for mobile view**.
- The search might not handle certain edge cases with non-standard or unexpected inputs.

## Future Improvements

- Make the project responsive and mobile-friendly.
- Use external APIs to improve search.
- Optimize search with fuzzy matching and advanced filtering.

---

**Note**: This README was generated with the help of [ChatGPT](https://chat.openai.com/).
