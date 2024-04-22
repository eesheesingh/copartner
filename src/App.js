import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import styles from "./style";
import Blog from "./components/BlogPage/Blog.jsx";
import Home from "./Home";
import ContactUs from './components/ContactUsPage/ContactUs.jsx'
import BlogPage from "./components/BlogPage/BlogPage.jsx";
// import ReferEarn from "./components/ReferEarn.jsx";
import AboutUsPage from "./components/AboutUsPage/AboutPage.jsx";
import ExpertisePage from "./components/ExpertisePage/ExpertisePage.jsx";
import SubscriptionRA from "./components/SubscriptionRAPage/SubscriptionRA.jsx";
import PrivacyPolicy from "./components/PrivacyAndTermsPage/PrivacyPolicy.jsx";
import Terms from "./components/PrivacyAndTermsPage/Terms.jsx";
import FAQ from './components/FaqPage/Faq.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route
          path="blogs"
          element={
            <div
              className={`md:mt-[5rem] mt-[1rem]${styles.boxWidth}`}
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
          <Route path="faq" element={<FAQ />} />
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
