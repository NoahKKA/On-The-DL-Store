import React, { useState } from "react";
import { supabase } from "../SupaBaseClient";

const convertToDirectLink = (googleDriveLink) => {
  try {
    const fileId = googleDriveLink.match(/\/d\/([^/]+)\//)[1];
    return `http://drive.google.com/uc?export=view&id=${fileId}`;
  } catch (error) {
    console.error("Error converting Google Drive link:", error.message);
    return null;
  }
};

const ItemForm = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [used, setUsed] = useState("");
  const [measurements, setMeasurements] = useState({});
  const [size, setSize] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [otherPictures, setOtherPictures] = useState([]);
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert Google Drive links to direct links
      const thumbnailUrl = convertToDirectLink(thumbnail);
      const otherPicturesUrls = otherPictures.map((link) =>
        convertToDirectLink(link)
      );

      const { data, error } = await supabase.from("Items").insert({
        name,
        des,
        used,
        measurements,
        size,
        price,
        thumbnail: thumbnailUrl,
        otherPictures: otherPicturesUrls,
      });

      if (error) {
        throw new Error(error.message);
      }
      console.log("Item added successfully:", data);

      // Reset the form fields after successful submission
      setName("");
      setDes("");
      setUsed("");
      setMeasurements({});
      setSize("");
      setThumbnail("");
      setPrice("")
      setOtherPictures([]);
    } catch (error) {
      console.error("Error adding item:", error.message);
    }
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
        type="int"
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
        <label>Used:</label>
        <input
          type="text"
          value={used}
          onChange={(e) => setUsed(e.target.value)}
        />
      </div>
      <div>
        <label>Measurements:</label>
        <input
          type="text"
          value={JSON.stringify(measurements)}
          onChange={(e) => setMeasurements(JSON.parse(e.target.value))}
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
        <label>Thumbnail URL:</label>
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Other Pictures URLs:</label>
        <input
          type="text"
          value={otherPictures}
          onChange={(e) => setOtherPictures(e.target.value.split(","))}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
