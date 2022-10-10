import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Loading = () => (
  <div className="loadingContainer">
    <img
      src="https://cdn.dribbble.com/users/720991/screenshots/4945468/media/2a616009ed522f90d247b4a2ff8e4376.gif"
      alt="Loading..."
    />
  </div>
);

const LazyWrapper = (Component) => (props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

const InitialLoad = LazyWrapper(lazy(() => import("./pages/InitialLoad")));
const Landing = LazyWrapper(lazy(() => import("./pages/Landing")));
const Login = LazyWrapper(lazy(() => import("./pages/Login")));
const Register = LazyWrapper(lazy(() => import("./pages/Register")));
const Home = LazyWrapper(lazy(() => import("./pages/Home")));
const RegisterEmployee = LazyWrapper(
  lazy(() => import("./pages/RegisterEmployee"))
);
const CreateAppointment = LazyWrapper(
  lazy(() => import("./pages/CreateAppointment"))
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialLoad />} />
        <Route path="/welcome" element={<Landing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signupEmployee" element={<RegisterEmployee />} />
        <Route path="/createAppointment" element={<CreateAppointment />} />
        <Route path="*" element={<div>Not found!</div>} />
      </Routes>
    </Router>
  );
}
