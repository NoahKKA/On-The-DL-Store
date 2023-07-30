import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./componets/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Picture from "./pages/Picture";
import PageTitleUpdater from "./componets/PageTitleUpdater";
import Loading from "./componets/Loading";
import ItemForm from "./pages/Test";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <PageTitleUpdater />
      <Routes>
        <Route
          exact
          path="/picture-web"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/picture/:id"
          element={
            <Layout>
              <Picture />
            </Layout>
          }
        />
                <Route
          path="/test"
          element={
            <Layout>
              <ItemForm />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
