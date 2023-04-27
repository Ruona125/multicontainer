import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="header">
        <div>This is a multicontainer application</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div className="main">
        <Routes>
          <Route path="/" exact element={<MainComponent />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
