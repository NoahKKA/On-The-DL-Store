import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../SupaBaseClient";
import { Carousel } from "react-bootstrap";

const Picture = () => {
  const { id } = useParams();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedPicture, setEnlargedPicture] = useState(null);
  const [pictureData, setPictureData] = useState({});

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        const { data, error } = await supabase
          .from("Items")
          .select()
          .eq("item_id", id);

        if (error) {
          throw new Error(error.message);
        }
        if (data && data.length > 0) {
          setPictureData(data[0]);
        } else {
          setPictureData({});
        }
      } catch (error) {
        console.log("Error Fetching Item By Id: ", error);
      }
    };
    fetchItemById();
  }, [id]);
  console.log(pictureData.measurements)
  const handleEnlargeImage = (picture) => {
    setEnlargedPicture(picture);
    setIsEnlarged(true);
  };

  const handleCloseEnlargeImage = () => {
    setIsEnlarged(false);
  };

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-between mt-4"
      style={{ minHeight: "55vh" }}
    >
      <div className="row mt-5 mb-5">
        <div className="col-md-6 d-flex align-items-center justify-content-center position-relative">
          <Carousel
            className={`w-100 h-100 ${isEnlarged ? "hide-arrows" : ""}`}
            indicators={false}
            interval={null}
            style={{ backgroundColor: "white", borderRadius: "15px" }}
          >
            <Carousel.Item
              style={{
                height: "400px",
              }}
              onClick={() => handleEnlargeImage(pictureData.thumbnail)}
            >
              <img
                src={pictureData.thumbnail}
                alt="tbt"
                className="img-fluid"
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Carousel.Item>
            {pictureData.otherPictures &&
              pictureData.otherPictures.map((picture, index) => (
                <Carousel.Item
                  key={index}
                  style={{
                    height: "400px",
                  }}
                  onClick={() => handleEnlargeImage(picture)}
                >
                  <img
                    src={picture}
                    alt={`tbt - ${index + 1}`}
                    className="img-fluid"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center center",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
          {isEnlarged && (
            <div
              className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", top: 0, left: 0 }}
              onClick={handleCloseEnlargeImage}
            >
              <img
                src={enlargedPicture}
                alt="tbt"
                className="img-fluid"
                style={{
                  objectFit: "contain",
                  maxHeight: "90%",
                  maxWidth: "90%",
                }}
              />
            </div>
          )}
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div>
            <h2 className="text-center fw-bold">{pictureData.name}</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: "10px" }}>Price: </h3>
              <h3 className="fw-bold" style={{ fontFamily: "Victor Mono" }}>
                ${pictureData.price}
              </h3>
            </div>

            <h3 className="">Description: {pictureData.des}</h3>
            {pictureData.used && (
              <h3 className="">Condition: {pictureData.used}</h3>
            )}
            {pictureData.size && <h3 className="">Size: {pictureData.size}</h3>}
            {pictureData.measurements &&
              Object.keys(pictureData.measurements).length > 0 && (
                <div className="">
                  <h3 className="">Measurements:</h3>
                  {pictureData.measurements.waist && (
                    <h3>Waist = {pictureData.measurements.waist} in.</h3>
                  )}
                  {pictureData.measurements.width && (
                    <h3>
                      Width = {pictureData.measurements.width} in.
                    </h3>
                  )}
                  {pictureData.measurements.length && (
                    <h3>Length = {pictureData.measurements.length} in.</h3>
                  )}
                  {pictureData.measurements.height && (
                    <h3>Height = {pictureData.measurements.height} in.</h3>
                  )}
                  {pictureData.measurements.base && (
                    <h3>Base = {pictureData.measurements.base} in.(diameter)</h3>
                  )}
                  {pictureData.measurements.inseam && (
                    <h3>Inseam = {pictureData.measurements.inseam} in.</h3>
                  )}
                  {pictureData.measurements.legOpening && (
                    <h3>
                      Leg Opening = {pictureData.measurements.legOpening} in.
                    </h3>
                  )}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
