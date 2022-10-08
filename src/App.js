import { Suspense, lazy, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Loading = () => <div>Loading...</div>;

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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialLoad />} />
        <Route path="/welcome" element={<Landing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<div>Not found!</div>} />
      </Routes>
    </Router>
  );
}
