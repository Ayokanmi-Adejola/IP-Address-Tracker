# Frontend Mentor - IP Address Tracker Solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Desktop Design](./design/desktop-preview.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [LeafletJS](https://leafletjs.com/) - JS mapping library
- [IP Geolocation API by IPify](https://geo.ipify.org/) - IP Geolocation API

### What I learned

This project was an excellent opportunity to enhance my skills in working with third-party APIs and creating responsive web applications. Some key learnings include:

- Integrating the IPify API to fetch and display geolocation data from IP addresses
- Implementing the LeafletJS library to create interactive maps with custom markers
- Building a responsive design that adapts seamlessly between mobile and desktop views
- Creating an intuitive user interface with proper loading states and error handling
- Implementing form validation for IP addresses and domain names
- Using CSS Flexbox to create a clean, modern layout that matches the design specifications

### Continued development

For future enhancements to this project and skills I want to develop further:

- Adding more detailed information about the IP address, such as connection type and security information
- Implementing a search history feature that allows users to quickly access previously searched IP addresses
- Creating smooth transitions and animations for a more polished user experience
- Optimizing performance for faster loading times, especially on mobile devices
- Implementing more advanced error handling with specific error messages for different types of failures
- Adding unit and integration tests to ensure the application works correctly across different scenarios

### Useful resources

- [IPify Documentation](https://geo.ipify.org/docs) - Comprehensive documentation for the IP Geolocation API
- [LeafletJS Documentation](https://leafletjs.com/reference.html) - Detailed guide for implementing maps with LeafletJS
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Helpful resource for understanding Flexbox layout


## Setup Instructions

1. Clone this repository to your local machine
2. Open the project in your code editor
3. Sign up for a free account at [IPify](https://geo.ipify.org/) to get an API key
4. Create a `.env` file in the root directory (you can copy `.env.example` and rename it)
5. Add your API key to the `.env` file: `IPIFY_API_KEY=your_api_key_here`
6. Replace the placeholder in script.js with your API key: `const apiKey = 'YOUR_API_KEY_HERE';`
7. Install dependencies (optional for advanced setup):
   ```
   npm install
   ```
8. Open index.html in your browser to view the project

### API Key Security

This project uses the IPify API which requires an API key. For security reasons:

- Never commit your API key to version control
- The `.env` file is included in `.gitignore` to prevent accidental commits
- For production, consider using environment variables and a proper build process
- If deploying to GitHub Pages or similar static hosts, you'll need to hardcode the API key or use a proxy

### Advanced Setup (Optional)

For a more secure approach using environment variables:

1. Install dependencies:
   ```
   npm install
   ```

2. Make sure your API key is in the `.env` file

3. Run the build script to inject your API key:
   ```
   npm run build
   ```

4. This creates a `script.build.js` file with your API key injected

5. Update your HTML to use this file instead:
   ```html
   <script src="script.build.js"></script>
   ```

Note: This is a simple demonstration. In a real project, you would use a proper bundler like Webpack, Parcel, or Vite.


## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)