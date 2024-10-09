---

# Dog API Project

This is a simple web-based project that fetches random dog images using the [Dog CEO's Dog API](https://dog.ceo/dog-api/). The project is built with basic web development technologies such as HTML, CSS, and JavaScript, and is designed to be a beginner-friendly way to interact with an external API.

## Features
- **Random Dog Images:** Fetches a new random dog image each time the button is clicked.
- **API Integration:** Demonstrates how to connect to a public API.
- **Simple & Responsive Design:** The UI adjusts to different screen sizes.

## Demo

![image](https://github.com/user-attachments/assets/182d38f5-7cb5-4970-a7c8-551c3e3bf015)
![image](https://github.com/user-attachments/assets/4f2fab80-c911-49f3-9839-0caefaee07b7)
![image](https://github.com/user-attachments/assets/0822f008-0877-427f-aa84-575fd5a62663)
![image](https://github.com/user-attachments/assets/688390e9-6614-4ab9-a032-a7b6710c99da)


## Installation

Follow the steps below to run the project on your local machine.

1. Clone this repository:
   ```bash
   git clone https://github.com/Vrushank2808/Dog-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Dog-api
   ```

3. Open the `index.html` file in your web browser to view the app.

## Usage

- After opening the `index.html` file in your browser, click on the "Fetch Dog" button to get a random dog image.
- The image will update with each click, fetching a new random dog from the API.

## Code Explanation

### Fetching Data from the Dog API
The main functionality of this project is implemented in the JavaScript file. It uses the `fetch` API to retrieve data from the Dog CEO API.

```javascript
fetch('https://dog.ceo/api/breeds/image/random')
   .then(response => response.json())
   .then(data => {
      document.getElementById('dog-image').src = data.message;
   });
```
This snippet sends a GET request to the API and updates the `src` of the image tag with the fetched URL.

## Folder Structure

```bash
├── index.html   # Main HTML file
├── style.css    # CSS for styling the page
└── script.js    # JavaScript for fetching API data
```

## Contributing

Contributions are welcome! If you would like to add new features or improve the existing ones, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

--- 
