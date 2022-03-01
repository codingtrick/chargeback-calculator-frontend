import CheckStatus from "../page/checkStatus";
import Demo from "../page/demo";
import Home from "../page/home";
import Issue from "../page/issue";
import Login from "../page/login";
import Register from "../page/register";
import SignUp from "../page/SignUp";
import UserType from "../page/userType";
import ViewEmployees from "../page/ViewEmployees";
import ViewIssue from "../page/viewIssue";
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
  {
    path: "/signin",
    component: SignUp,
    title: "Profile",
  },
  {
    path: "/view-issue",
    component: ViewIssue,
    title: "Issue",
  },
  ,
  {
    path: "/check-status",
    component: CheckStatus,
    title: "Issue",
  },
  {
    path: "/view-employee",
    component: ViewEmployees,
    title: "Issue",
  },
];

export default routes;
