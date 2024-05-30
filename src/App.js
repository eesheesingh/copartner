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
import AboutUsPage from "./components/AboutUsPage/AboutPage.jsx";
import ExpertisePage from "./components/ExpertisePage/ExpertisePage.jsx";
import SubscriptionRA from "./components/SubscriptionRAPage/SubscriptionRA.jsx";
import PrivacyPolicy from "./components/PrivacyAndTermsPage/PrivacyPolicy.jsx";
import Terms from "./components/PrivacyAndTermsPage/Terms.jsx";
import FAQ from './components/FaqPage/Faq.jsx'
import CoursePage from "./components/HomePage/CourseCards/CoursePage.jsx";
import CourseList from "./components/HomePage/CourseCards/CourseList.jsx";
import RefundPolicy from "./components/PrivacyAndTermsPage/RefundPolicy.jsx";
import JoinTeamForm from "./components/HomePage/StockSection/JoinTeamForm.jsx";
import ExpertTerms from "./components/HomePage/StockSection/ExpertTerms.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
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
          <Route path="experts-explore" element={<ExpertisePage />} />
          {/* <Route path="/subscriptionRA/:id" element={<SubscriptionRA />} /> */}
          {/* <Route path="/subscriptionRA/:id/course" element={<CourseList />} /> */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="terms-of-services" element={<Terms />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="/joinTeam" element={<JoinTeamForm />} />
          <Route path="/terms-and-conditions-for-experts" element={<ExpertTerms />} />
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
