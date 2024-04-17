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
import ContactUs from './components/ContactUs.jsx'
import BlogPage from "./components/BlogPage.jsx";
// import ReferEarn from "./components/ReferEarn.jsx";
import AboutUsPage from "./components/AboutUsPage/AboutPage.jsx";
import ExpertisePage from "./components/ExpertisePage.jsx";
import SubscriptionRA from "./components/SubscriptionRA.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Terms from "./components/Terms.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
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
         <Route path="contact-us" element={<ContactUs />} />
         <Route path="about-us" element={<AboutUsPage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
          {/* <Route path="refer&earn" element={<ReferEarn />} /> */}
          <Route path="experts-explore" element={<ExpertisePage />} />
          <Route path="/subscriptionRA/:id" element={<SubscriptionRA />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-services" element={<Terms />} />
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
