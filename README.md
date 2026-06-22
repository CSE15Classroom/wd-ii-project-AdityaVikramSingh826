# Amazon E-Commerce Frontend

Amazon E-Commerce Frontend is a production-ready online shopping interface built with React, Vite, React Router DOM, Context API, CSS3, and local storage.

## Features

- Responsive Amazon-style navbar with search, wishlist count, cart count, and theme toggle
- Product catalog with 22 realistic products across Electronics, Fashion, Home, Books, and Accessories
- Real-time search, category filtering, and sorting by price or rating
- Product details pages with large imagery, rating, price, and action buttons
- Shopping cart with add, remove, quantity increase/decrease, and total calculation
- Wishlist with add, remove, and move-to-cart workflow
- Local storage persistence for cart, wishlist, and dark mode preference
- Loading state, empty states, 404 page, and graceful product-not-found handling
- Fully responsive layouts for mobile, tablet, and desktop
- HashRouter routing for GitHub Pages compatibility

## Technologies Used

- React 19
- Vite 8
- JavaScript ES6+
- HTML5
- CSS3
- React Router DOM
- Context API
- Local Storage

## Installation Steps

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build Commands

```bash
npm run build
npm run preview
```

`npm run build` creates the production files in the `dist` folder. `npm run preview` serves the production build locally for final verification.

## GitHub Pages Deployment Steps

1. Push the project to a GitHub repository.
2. Run `npm run build`.
3. Deploy the `dist` folder using your preferred GitHub Pages workflow.
4. Keep `vite.config.js` with `base: "./"` and keep `HashRouter` enabled so deployed routes work after refresh.

Example deployment with the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

Add these scripts to `package.json` if your evaluator allows deployment scripts:

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

## Screenshots

Add screenshots here after running the project locally:

- Home Page
- Products Page
- Product Details Page
- Cart Page
- Wishlist Page
- Dark Mode

## Future Enhancements

- Add checkout form validation and mock order confirmation
- Add product review UI and rating breakdowns
- Add coupon code simulation
- Add recently viewed products
- Add comparison table for similar products
- Add account state and order history screens
