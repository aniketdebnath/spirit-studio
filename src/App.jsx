import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Landing,
  Cocktail,
  Newsletter,
  HomeLayout,
  Error,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader,
        },
        {
          path: "cocktail/:id",
          element: <Cocktail />,
          errorElement: <SinglePageError />,
          loader: singleCocktailLoader,
        },
        {
          path: "newsletter",
          element: <Newsletter />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
