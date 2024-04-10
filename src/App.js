import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import styles from "./style";
import Blog from "./components/Blog";
import Home from "./Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route
          path="blogs"
          element={
            <div
              className={`md:mt-[5rem] md:px-[2rem] mt-[1rem]${styles.boxWidth}`}
              id="blogs"
            >
              <Blog />
            </div>
          }
        />
      </Route>
    )
  );

  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
