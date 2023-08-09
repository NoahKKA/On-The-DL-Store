import React, { useState, useEffect } from "react";
import { supabase } from "../SupaBaseClient";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import "./Card.css";

const Card = ({ category, subCategory, searchInput, priceFilter }) => {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [items, setItems] = useState([]);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Victor Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        ],
      },
    });
    const fetchItems = async () => {
      try {
        let query = supabase.from("Items").select("*");
  
        if (category && category !== "*") {
          query = query.eq("category", category);
        }
  
        if (subCategory && subCategory !== "*") {
          query = query.eq("subCategory", subCategory);
        }

        if (searchInput) {
          query = query.ilike("name", `%${searchInput}%`);
        }
    
        if (priceFilter === "lowest") {
          query = query.order("price");
        } else if (priceFilter === "highest") {
          query = query.order("price", { ascending: false });
        } else if (priceFilter === "under10") {
          query = query.lt("price", 10);
        } else if (priceFilter === "under5") {
          query = query.lt("price", 5);
        }
  
        const { data, error } = await query;
  
        if (error) {
          throw new Error(error.message);
        }
        setItems(data);
      } catch (error) {
        console.log("Error Fetching Items: ", error);
      }
    };
  
    fetchItems();
  }, [category, subCategory, priceFilter, searchInput]);

  console.log(items);
  const handleCardClick = (cardId) => {
    if (!isMobileDevice) {
      setFlippedCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
    }
  };

  const handleCardTouchStart = () => {
    if (isMobileDevice) {
      setFlippedCardId(null);
    }
  };

  const handleCardTouchEnd = (cardId) => {
    if (isMobileDevice) {
      setFlippedCardId(cardId);
    }
  };

  const handleButtonClick = (e, cardId) => {
    e.stopPropagation();
    setFlippedCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
  };

  return (
    <div className="card-container mb-5">
      {items.map((card) => (
        <div
          className={`card ${flippedCardId === card.item_id ? "flipped" : ""}`}
          key={card.item_id}
          onClick={() => handleCardClick(card.item_id)}
          onTouchStart={handleCardTouchStart}
          onTouchEnd={() => handleCardTouchEnd(card.item_id)}
          style={{ borderRadius: "15px" }}
        >
          <div
            className={`card-inner ${
              flippedCardId === card.item_id ? "flipped" : ""
            }`}
          >
            <div
              className="card-front"
              style={{ backgroundColor: "beige", borderRadius: "15px" }}
            >
              <img
                src={card.thumbnail}
                className="card-img-top"
                style={{
                  backgroundColor: "white",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
                alt=""
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p
                  className="card-text fw-bold"
                  style={{ fontFamily: "Victor Mono" }}
                >
                  ${card.price}
                </p>
              </div>
            </div>
            <div className="card-back">
              <h3>Description</h3>
              <p>{card.des}</p>
              <button onClick={(e) => handleButtonClick(e, card.item_id)}>
                Close
              </button>
              <Link
                to={`/picture/${card.item_id}`}
                className="btn btn-primary custome-btn"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
