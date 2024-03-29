import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { supabase } from "../SupaBaseClient";


const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data, error } = await supabase.from("QuestionsnConcerns").insert([
        { name, phone, email, input: questions },
      ]);
  
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 10); // Remove non-digits and limit to 10 digits
    const formattedInput = input.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3"); // Format to (xxx)xxx-xxxx
    setPhone(formattedInput);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQuestionsChange = (e) => {
    setQuestions(e.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="text-center">Contact</h1>
          <div className="text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x" />
            <p>Las Vegas, NV</p>
            <h2>Email</h2>
            <p>onthedl667@gmail.com</p>
            <h2>Instagram</h2>
            <p>@onthedl.shs</p>
          </div>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  style={{
                    border: "2px solid black",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="\(\d{3}\)\d{3}-\d{4}"
                  required
                  style={{
                    border: "2px solid black",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  style={{
                    border: "2px solid black",
                  }}
                />
                <small>Must contain @ and .com</small>
              </div>
              <div className="mb-3">
                <label htmlFor="questions" className="form-label">
                  Questions or Concerns:
                </label>
                <textarea
                  className="form-control"
                  id="questions"
                  value={questions}
                  onChange={handleQuestionsChange}
                  style={{
                    border: "2px solid black",
                  }}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mb-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
