# Travel Recommendation Project

This project is a part of a JavaScript learning experience. It leverages HTML, CSS, and JavaScript to build a simple travel recommendation tool. The tool allows users to search for various travel destinations such as beaches, temples, and countries, and displays relevant results dynamically.

## Tools & Technologies Learned

### HTML:
- Basic structure of a webpage.
- Forms and input fields.

### CSS:
- Layouts (Flexbox, Grid).
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
  - Specific country names (e.g., Saudi Arabia, Brazil) and their associated cities (e.g., Makkah, Medina, Rio de Janeiro) can also be searched.

- **Results Display**: 
  - After a search, the results are displayed dynamically within the results container.
  - If no results are found, a "No results found" message is displayed.
  - If the search field is empty, a prompt to enter a search keyword is shown.

- **Clear Search**: 
  - The user can clear the search input and reset the results view.

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

## Example Searches

- Searching for **beach** or **beaches** will return results related to popular beaches (e.g., Bora Bora, Copacabana).
- Searching for **temple** or **temples** will return results for famous temples (e.g., Makkah, Medina).
- Searching for **country** or **countries** will show results from different countries and their cities.
- Searching for a specific **country name** (e.g., **Brazil**, **Saudi Arabia**) will show cities within that country (e.g., Rio de Janeiro for Brazil, Makkah and Medina for Saudi Arabia).

## Known Issues

- The project is **not designed for mobile view**.
- The search might not handle certain edge cases with non-standard or unexpected inputs.

## Future Improvements

- Make the project responsive and mobile-friendly.
- Add more destinations, countries, and cities to expand the search options.
- Enhance the UI with more interactive elements (e.g., maps, detailed city information).
- Optimize search with fuzzy matching and advanced filtering.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for exploring this project. Happy coding!

---

**Note**: This README was generated with the help of [ChatGPT](https://chat.openai.com/).
