import React, { useState, useEffect } from "react";
import { supabase } from "../SupaBaseClient";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("clothes");
  const [subCategory, setSubCategory] = useState("none");
  const [thumbnail, setThumbnail] = useState("");
  const [otherPictures, setOtherPictures] = useState("");
  const [measurementsInput, setMeasurementsInput] = useState(""); // Separate state for raw input
  const [measurements, setMeasurements] = useState({});

  const handleChangeMeasurements = (e) => {
    setMeasurementsInput(e.target.value); // Update the raw input state
  };

  useEffect(() => {
    // Parse the measurements object whenever the raw input changes
    const keyValuePairs = measurementsInput.split(",").map((pair) => pair.split(":"));
    const measurementsObj = keyValuePairs.reduce((obj, [key, value]) => {
      if (key && value) {
        obj[key.trim()] = value.trim();
      }
      return obj;
    }, {});
    setMeasurements(measurementsObj); // Update state with the parsed object
  }, [measurementsInput]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("Items").insert({
        name,
        des,
        measurements,
        size,
        price,
        category,
        subCategory,
        thumbnail: extractImageUrl(thumbnail),
        otherPictures: otherPictures
          ? otherPictures.split(",").map((image) => extractImageUrl(image.trim()))
          : [], // Handle empty or null otherPictures input
      });

      if (error) {
        throw new Error(error.message);
      }
      console.log("Item added successfully:", data);

      // Reset the form fields after successful submission
      setName("");
      setDes("");
      setMeasurements({});
      setSize("");
      setPrice("");
      setCategory("clothes");
      setSubCategory("women");
      setThumbnail("");
      setOtherPictures("");
    } catch (error) {
      console.error("Error adding item:", error.message);
    }
  };

  const extractImageUrl = (htmlInput) => {
    const regex = /<img.*?src=['"](.*?)['"]/;
    const match = htmlInput.match(regex);
    return match ? match[1] : ""; // Return the extracted URL or an empty string if no match found
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Measurements:</label>
        <textarea
          rows="3"
          value={measurementsInput} // Use the raw input value here
          onChange={handleChangeMeasurements}
          placeholder={`Example format:\nwaist: 15in, length: 12in`}
        />
      </div>
      <div>
        <label>Size:</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <div>
        <label>Thumbnail:</label>
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Other Pictures:</label>
        <input
          type="text"
          value={otherPictures}
          onChange={(e) => setOtherPictures(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="clothes">Clothes</option>
          <option value="miscellaneous">Miscellaneous</option>
          <option value="household">Household</option>
          <option value="footwear">Footwear</option> {/* Added "footwear" option */}
        </select>
      </div>
      <div>
        <label>Subcategory:</label>
        <select
          value={subCategory === null ? "null" : subCategory} // Display "null" option if subCategory is null
          onChange={(e) => setSubCategory(e.target.value === "null" ? null : e.target.value)}
        >
          <option value="null">None</option> {/* Added "None" option for null subCategory */}
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
