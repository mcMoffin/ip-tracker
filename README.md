# Frontend Mentor - IP address tracker solution

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![./ScreenShots/Web-view-default.JPG]
![./ScreenShots/Web-hover-&-new-location.JPG]
![./ScreenShots/mobile-view-default.JPG]

### Links

- Solution URL: (https://mcmoffin.github.io/ip-tracker.github.io/)
- Live Site URL: (https://mcmoffin.github.io/ip-tracker.github.io/)

## My process
I started with installing React and breaking down the project into components. Then worked on getting the leaflet component to display the the API was intuitive so it had no isues delivering the data that was submitted. once the components assembled and working, I worked on getting the styles implemented, using a mobile first approach. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [SCSS](https://sass-lang.com/) - CSS Processore
- [React Leaflet](https://react-leaflet.js.org/docs/api-map/) - Leaflet Library
- [LeafletJS](https://leafletjs.com/) - JS Library
- [IPAPI](https://ipapi.co/#api) - Free, keyless IP Api

### What I learned

I had trouble getting an account for IP Geolocation, I found a Keyless API that does the same thing without creating an account. So I learned about keyless APIs, I how to better handle fetch requests, proper validation to avoid the latlng error and react's asynchronous behavior. because of how React works it rendered the Leafelet before the API sends the data, as such I had to add a conditional render that renders only after the data has been recived and validated.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const [IPAddress, setIPAddress] = useState('');
...some code

// Validate latitude and longitude
  const isValidLatLng = (lat, lng) => {
    return !isNaN(lat) && lat >= -90 && lat <= 90 && !isNaN(lng) && lng >= -180 && lng <= 180;
  };

  const validLatLng = isValidLatLng(IPInfo.latitude, IPInfo.longitude);
  return (
      <React.StrictMode>
        ... some code

        // conditional render
        {IPInfo.latitude && IPInfo.longitude && validLatLng ? (
                <Leaflet
                  longitude={IPInfo.longitude}
                  latitude={IPInfo.latitude}
                  IPAddress={IPAddress}
                />
              ) : (
                <div>Loading...</div>
              )}
```

### Continued development

Still trying to work on how to improve my clean code writing to minimise errors.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [React Docs](https://react.dev/reference/react) - This helped me to better understand sertain hooks and react. I really liked this pattern and will use it going forward.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@mcMoffin](https://www.frontendmentor.io/profile/mcMoffin)
- LinkedIn - [Ruildo](https://www.linkedin.com/in/ruildo-dcl/)
- Web Portfolio -[Portfolio](https://ruildodcl.ca/)
