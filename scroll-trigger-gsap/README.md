# React Scroll Animation with GSAP

This React application demonstrates scroll animations using GSAP (GreenSock Animation Platform). The animations include dynamic scaling, rotation, and background color changes triggered by scrolling actions.

## Features

- **Logo Animation:** Clicking on the logo triggers animations to scale and rotate it.
- **Scroll-triggered Animations:**
  - Fade-in animation for the main logo and text.
  - Circular elements scaling on click events.
  - Image reveal and background color change triggered by scroll actions.

## Technologies Used

- React
- GSAP (GreenSock Animation Platform)
- Lenis library for RAF (Request Animation Frame)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ASWINKMANOJ/react-web-animations.git
   ```

2. Install dependencies:

   ```bash
   cd react-web-animations && cd scroll-trigger-gsap && npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Usage

- Click on the logo to trigger scaling and rotation animations.
- Scroll down to reveal images and trigger background color changes.

## Code Overview

- `App.js`: The main React component that handles animations using GSAP and Lenis library.
- `App.css`: Styles for the application components.
- `logo.svg`, `beach.jpg`: Image assets used in the application.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- [GSAP - GreenSock Animation Platform](https://greensock.com/gsap/)
- [Lenis](https://www.npmjs.com/package/@studio-freight/lenis)

Feel free to explore and modify the code to suit your needs!
