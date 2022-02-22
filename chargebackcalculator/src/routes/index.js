import Demo from "../page/demo";
import Home from "../page/home";
import Issue from "../page/issue";
import Login from "../page/login";
import Register from "../page/register";
import UserType from "../page/userType";
import ViewProfile from "../page/viewProfile";

const routes = [
  {
    path: "/",
    component: Home,
    title: "Home:ChargeBack Calcuator",
  },
  {
    path: "/home",
    component: Home,
    title: "Home:ChargeBack Calcuator",
  },
  {
    path: "/demo",
    component: Demo,
    title: "Demo:ChargeBack Calcuator",
  },
  {
    path: "/userselection",
    component: UserType,
    title: "User Selection",
  },
  {
    path: "/issue",
    component: Issue,
    title: "Issue Page",
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/register",
    component: Register,
    title: "Issue Page",
  },
  {
    path: "/view-profile",
    component: ViewProfile,
    title: "Profile",
  },
];

export default routes;
