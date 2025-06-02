## Wander Notes - Personal Travel Blog

I created the Wander Notes website for my personal blog to compile all my travel experiences and food tastings from different places. This is a responsive, minimalist blog website built with React. This is also have a fully responsive navigation bar, integration to a headless CMS, and user authentication(that I will add soon). The theme is nostalgic and coastal-inspired travel experience, photography and food notes.

## Design Choices

I've decided carefully the design for my website to create a calm and welcoming user experience.

\*\* THEME
Coastal Nostalgia and minimalism -- this includes using warm, muted tones and soft layouts.

\*\* TYPOGRAPHY
I chose to use the [Segoe UI', Tahoma, Geneva, Verdana, and sans-serif] for clean and readable font to ensure the clarity and accessibility for all users.

\*\* COLOR PALETTE

- `#fafaf8` Soft Cream for the Background
- `#69331b` Warm brown for the Text
- Accent Neutral shades for the hover and active states.

\*\* NAVIGATION DESIGN
I created a navigation designs that includes a sticky and responsive navigation bar with the following:

- Logo: I created a custom logo that shows the arirplane and compass that symbolizes travel in different places.
- I also used a hamburger menu for mobile views.
- Simple set of menu items: About, Blog, Places and will add more soon(inluding User).
- An animated hamburger icon that transform into 'X'.

## Impelmentation Approach

To build this website, I am using a component-based approach with React as a single-page application. For navigation, I implement a React Router to ensure the site is responsive with Custom CSS and media queries. For content management, I plan to integrate a headless CMS, either Contentful or Sanity, which will allow for effortless updates to blog posts and pages. Additionally, Firebase will be employed to ensure secure user authentication throughout the site.

## Navigation Menu (Functionality)

For my navigation menu,it works fully responsively. It adopts for both desktop and mobile layouts with the use of media queries in CSS, to ensure user can access it easily for mobile and desktop screen. The sticky navigation bar keeps the visibility during scrolling. The hamburger menu features a transition animation and transformed into 'X' when it's toggled.

## How to run the application locally

To run the application locally, the users needs to have a Node.js (version 16 or higher).After cloning the repository using Git, user also needs install the dependency which is the react-router-dom with npm install react-router-dom. The application can be started with npm start to run the projext on a local server.
