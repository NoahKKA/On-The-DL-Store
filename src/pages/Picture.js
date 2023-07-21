import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cards from "../data/cards";
import { Carousel } from "react-bootstrap";

const Picture = () => {
  const { id } = useParams();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedPicture, setEnlargedPicture] = useState(null);

  const pictureData = cards[id];

  if (!pictureData) {
    return <div>Picture not found.</div>;
  }

  const { mainPicture, otherPicture } = pictureData;

  const handleEnlargeImage = (picture) => {
    setEnlargedPicture(picture);
    setIsEnlarged(true);
  };

  const handleCloseEnlargeImage = () => {
    setIsEnlarged(false);
  };

  return (
    <div className="container mt-4">
      <h1>Picture Page</h1>
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
              onClick={() => handleEnlargeImage(mainPicture)}
            >
              <img
                src={mainPicture}
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
            {otherPicture.map((picture, index) => (
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
      </div>
    </div>
  );
};

export default Picture;
