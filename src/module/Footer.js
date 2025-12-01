// src/ContactForm.js
import React, { useState } from "react";
import'../style/Footer.css';

const Footer = () => {
  // State to store form data and messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Client-side validation
  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      return "All fields are required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email.";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Please enter a valid phone number (10 digits).";
    }
    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Send form data to API (mock API here)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const data = await response.json();

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("There was an issue submitting your form. Please try again.");
      }
    } catch (error) {
      setError("There was an error sending your form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (


    <section  className="form-section py-5">
<div className="container form-container py-5 px-5">
    <div  data-aos="fade-left" data-aos-delay="400" className="form-text "> 
      <h3>Let's Talk</h3>
      <p>Reach out to us with your queries, suggestions and applications. 
        We’d be happy to explore the next growth opportunity!</p>

        <div class="location-container">
   <ul>
    <li> Office No. 706, 7th Floor, TOWER-2, 
      WORLD TRADE CENTER, EON Free Zone, Kharadi, Pune, Maharashtra 411014</li>
   </ul>

</div>
    </div>
      
    <div  data-aos="fade-right" data-aos-delay="500"className="contact-form">
    
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <input
          placeholder="Name*"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
          placeholder="Email*"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="phone">Phone:</label> */}
          <input
          placeholder="Phone Number*"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="submit-btn"  type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    </div>
    </section>

  );
};

export default Footer;
