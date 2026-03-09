import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Github, { GithubDetail } from "../Github/Github";
import User from "../User/User";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        // index:true, this the child component render on same page as parent
        Component: Home,
      },
      // {
      //   path: "",
      //   // index: true, //this the child component render on same page as parent
      //   Component: App,
      // },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "Github",
        loader: GithubDetail,
        Component: Github,
      },
      {
        path: "users/:name",
        Component: User,
      },
    ],
  },
]);

function RoutesProvider() {
  return(
<>
    <RouterProvider router={route} />;
</>
  )
}

export default RoutesProvider;
