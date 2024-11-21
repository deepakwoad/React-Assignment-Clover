import Form from "../components/Form";
import { AssignmentFourth, AssignmentSecond, AssignmentThird } from "../components/SampleAssignment";
import ErrorPage from "../components/ErrorPage";

const HomePage = () => {
  return <h2>Hello Deepak...</h2>;
}

export const routeList = [
  {
    path: "/",
    label: "Home",
    main: <HomePage />,
  },
  {
    path: "/a1",
    label: "Assignment 1",
    main: <Form />,
  },
  {
    path: "/a2",
    label: "Assignment 2",
    main: <AssignmentSecond />,
  },
  {
    path: "/a3",
    label: "Assignment 3",
    main: <AssignmentThird />,
  },
  {
    path: "/a4",
    label: "Assignment 4",
    main: <AssignmentFourth />,
  },
  {
    path: "*",
    label: "Error Page",
    main: <ErrorPage />,
  },
];
