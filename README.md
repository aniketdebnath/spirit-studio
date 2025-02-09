# Spirit Studio - Cocktail Finder

Spirit Studio is a React-based **Single Page Application (SPA)** that provides users with cocktail recipes. The app fetches data from **TheCocktailDB API** and allows users to search for drinks, view detailed cocktail information, and subscribe to a newsletter. The project is built with modern frontend technologies, including **React Router 6.4+, React Query 4.2+, Axios, and Styled Components**.

---

## Features

- **Search Cocktails** by name using **TheCocktailDB API**
- **Detailed Cocktail Information** with ingredients and instructions
- **React Router 6.4+** for client-side navigation with Loaders & Actions
- **React Query 4.2+** for efficient data fetching and caching
- **Custom Loaders in React Router** to fetch data before rendering pages
- **Styled Components** for modular CSS-in-JS styling
- **Toast Notifications** using React Toastify
- **Newsletter Subscription** with form handling and API integration
- **Global Loading Indicator** with `useNavigation()`
- **Optimized Performance** with React Query caching

---

## Tech Stack

### Frontend

- **React** – Functional components & hooks
- **React Router 6.4+** – Routing, Loaders, Actions, Navigations
- **React Query 4.2+** – API fetching & caching
- **Axios** – HTTP requests handling
- **Styled Components** – Component-based styling
- **React Toastify** – Notifications
- **TheCocktailDB API** – External data source

---

## Installation & Setup

### Clone the Repository

```sh
git clone https://github.com/yourusername/spirit-studio.git
cd spirit-studio
```

### Install Dependencies

npm install

### Start the Development Server

npm run dev

The app will be available at http://localhost:5173

## API Integration

Search Cocktails by Name

```sh
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
```

Fetch Cocktail Details by ID

```sh
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
```

## License

This project is open-source under the MIT License.

## Acknowledgments

Special thanks to [TheCocktailDB](https://www.thecocktaildb.com/) for providing cocktail data.
