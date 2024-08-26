import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Skillspage from "./pages/Skillspage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "homepage",
          element: <Homepage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "skills",
          element: <Skillspage />,
        },
        {
          path: "projects",
          element: <ProjectsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ].filter((item) => item),
    },
  ]);

  return <RouterProvider router={router} />;
}
