# Project 8: Spots

### Overview

Spots is an interactive image-sharing platform where users can post, delete, and like photos of interesting locations around the world. The project evolved from a responsive layout into a dynamic, data-driven application utilizing JavaScript to handle UI rendering and user interactions.

---

## Technologies and Techniques

- **DOM Manipulation & Dynamic Rendering:** Programmatically generated card elements and injected them into the DOM using JavaScript, moving away from hardcoded HTML.
- **Array & Object Manipulation:** Utilized object arrays to store card data (titles, image links) and implemented loops (`forEach`) to iterate through initial card datasets seamlessly.
- **Event Handling:** Implemented interactive JavaScript event listeners to handle dynamic user interactions such as liking and deleting spots.
- **Responsive & Adaptive Layouts:** Built using a combination of **Flexbox** and **CSS Grid** (`auto-fit`, `minmax`) to ensure the layout dynamically shifts across devices.
- **Media Queries:** Implemented key breakpoints (such as `630px`) to gracefully handle mobile styling transitions.
- **Advanced CSS Styling:** Used text-truncation techniques (`text-overflow: ellipsis` and `-webkit-line-clamp`) to maintain a clean UI by hiding overflowing text in titles.

---

## Key Features

- **Dynamic Card Generation:** Renders a collection of places automatically upon page load from a centralized JavaScript data structure.
- **Interactive Controls:** Users can interactively like or delete photo cards directly within the UI, triggering real-time DOM updates.
- **Fluid Grid System:** Displays a 3-column layout on desktops, transitions to a 2-column layout on tablets, and scales down to a single column on mobile viewports.
- **Interactive UI Elements:** Hover and active states added to all links, buttons, and form inputs to maximize user experience (UX) and engagement.

---

## Deployment & Walkthrough

- **Live Site:** Check out the [Live Deployment Link Here](https://sway1love3-png.github.io/se_project_spots/).

- **Project Pitch Video:** Watch my [Project Walkthrough Video](https://drive.google.com/file/d/1Bf9qgUlu7oZBiiZiTOebLlzBc4OCp447/view?usp=sharing) to see a demonstration of the application's responsive features and hear about the engineering challenges I solved during development.
