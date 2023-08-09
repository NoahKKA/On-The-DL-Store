import React, { useState } from "react";
import Card from "../componets/Card";
import "./AllCards.css"

export default function AllCards() {
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("*");
  const [subCategoryFilter, setSubCategoryFilter] = useState("*");
  const [priceFilter, setPriceFilter] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategoryFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12">
          <div className="search-bar">
            <h3>Filters</h3>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search by name"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <h5>Search By Category</h5>
            <select
              className="form-select mb-3"
              value={categoryFilter}
              onChange={handleCategoryChange}
            >
              <option value="clothes">Clothes</option>
              <option value="miscellaneous">Miscellaneous</option>
              <option value="household">Household</option>
              <option value="footwear">Kicks</option>
            </select>
            <h5>Search By Subcategory</h5>
            <select
              className="form-select mb-3"
              value={subCategoryFilter}
              onChange={handleSubCategoryChange}
            >
              <option value="null">None</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
            </select>
            <h5>Search By Price</h5>
            <select
              className="form-select mb-3"
              value={priceFilter}
              onChange={handlePriceChange}
            >
              <option value="">All Prices</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
              <option value="under10">Under $10</option>
              <option value="under5">Under $5</option>
            </select>
          </div>
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12">
          <h1 className="text-center mb-5">Browse</h1>
          <Card
            category={categoryFilter}
            subCategory={subCategoryFilter}
            searchInput={searchInput}
            priceFilter={priceFilter}
          />
        </div>
      </div>
    </div>
  );
}
