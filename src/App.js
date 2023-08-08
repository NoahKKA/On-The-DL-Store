import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCards from "./pages/AllCards";
import Layout from "./componets/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Picture from "./pages/Picture";
import PageTitleUpdater from "./componets/PageTitleUpdater";
import Loading from "./componets/Loading";
import ItemForm from "./pages/Test";
import Home from "./pages/Home";
import Miscellaneous from "./pages/Misellaneous";
import Household from "./pages/Household";
import Clothes from "./pages/Clothes";
import WomenClothes from "./pages/Women";
import Shoes from "./pages/Shoes";
import MenClothes from "./pages/Men.js";

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
              <AllCards />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
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
        <Route
          path="/the-drip"
          element={
            <Layout>
              <Clothes />
            </Layout>
          }
        />
        <Route
          path="/the-drip/women"
          element={
            <Layout>
              <WomenClothes/>
            </Layout>
          }
        />
        <Route
          path="/the-drip/men"
          element={
            <Layout>
              <MenClothes/>
            </Layout>
          }
        />
          <Route
          path="/the-drip/kicks"
          element={
            <Layout>
              <Shoes/>
            </Layout>
          }
        />
        <Route
          path="/household"
          element={
            <Layout>
              <Household />
            </Layout>
          }
        />
        <Route
          path="/miscellaneous"
          element={
            <Layout>
              <Miscellaneous />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
