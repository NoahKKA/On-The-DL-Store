import "./Home.css";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { supabase } from "../SupaBaseClient";
import { Link } from "react-router-dom";


export default function HomeTest() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function getCategoryData() {
      const categories = ["clothes", "household", "miscellaneous"];

      const categoryData = await Promise.all(
        categories.map(async (category) => {
          const { data, error } = await supabase
            .from("Items")
            .select("*")
            .eq("category", category)
            .limit(3);

          if (error) {
            throw new Error(
              `Error fetching items from ${category}: ${error.message}`
            );
          }

          return data;
        })
      );
      setCategoryData(categoryData);
    }

    getCategoryData();
  }, []);

  console.log(categoryData);

  return (
    <div className="home-container container-fluid">
      <div className="row">
        <div className="col p-0 banner-img">
          <img
            src={process.env.PUBLIC_URL + "/banner.jpg"}
            alt="On The Dl Banner"
            className="img-fluid p-0"
          />
        </div>
      </div>

      {categoryData.length > 0 && categoryData[0].length > 0 && (
        <div className="row mt-4">
          <Link to='/picture-web'><h2 className="text-center">The Drip</h2></Link>
          <div className="col">
            <Carousel
              id="carousel"
              className="m-auto shadow-lg rounded"
              indicators={false}
            >
              {categoryData[0].map((item) => (
                <Carousel.Item key={item.item_id} className="rounded">
                  <div className="carousel-image-container rounded">
                    <img
                      className="d-block w-100"
                      src={item.thumbnail}
                      alt={item.name}
                    />
                  </div>
                  <Carousel.Caption className="rounded-bottom d-none d-md-block">
                    <h3>{item.name}</h3>
                    <p>{item.des}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      {categoryData.length > 0 && categoryData[0].length > 0 && (
        <div className="row mt-4">
          <Link to='/picture-web'><h2 className="text-center">Household</h2></Link>
          <div className="col">
            <Carousel
              id="carousel"
              className="m-auto shadow-lg rounded"
              indicators={false}
              interval={null}
            >
              {categoryData[1].map((item) => (
                <Carousel.Item key={item.item_id} className="rounded">
                  <div className="carousel-image-container rounded">
                    <img
                      className="d-block w-100"
                      src={item.thumbnail}
                      alt={item.name}
                    />
                  </div>
                  <Carousel.Caption className="rounded-bottom d-none d-md-block">
                    <h3>{item.name}</h3>
                    <p>{item.des}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      {categoryData.length > 0 && categoryData[0].length > 0 && (
        <div className="row mt-4 mb-4">
          <Link to='/picture-web'><h2 className="text-center">Miscellaneous</h2></Link>
          <div className="col">
            <Carousel
              id="carousel"
              className="m-auto shadow-lg rounded"
              indicators={false}
            >
              {categoryData[2].map((item) => (
                <Carousel.Item key={item.item_id} className="rounded">
                  <div className="carousel-image-container rounded">
                    <img
                      className="d-block w-100"
                      src={item.thumbnail}
                      alt={item.name}
                    />
                  </div>
                  <Carousel.Caption className="rounded-bottom d-none d-md-block">
                    <h3>{item.name}</h3>
                    <p>{item.des}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
