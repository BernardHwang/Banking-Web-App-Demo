import React, { useState } from "react";
import axios from "axios";
import "../style/components/CreateUser.css"

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    gender: "",
    address: "",
    stateOfOrigin: "",
    email: "",
    phoneNumber: "",
    alternativePhoneNumber: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/user/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponseMessage("User created successfully!");
    } catch (error) {
      setResponseMessage(
        "Error creating user: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="create-user-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="otherName" className="form-label">Other Name</label>
          <input
            type="text"
            className="form-control"
            id="otherName"
            name="otherName"
            value={formData.otherName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stateOfOrigin" className="form-label">State of Origin</label>
          <input
            type="text"
            className="form-control"
            id="stateOfOrigin"
            name="stateOfOrigin"
            value={formData.stateOfOrigin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alternativePhoneNumber" className="form-label">Alternative Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="alternativePhoneNumber"
            name="alternativePhoneNumber"
            value={formData.alternativePhoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
      {responseMessage && <p className="mt-3">{responseMessage}</p>}
    </div>
  );
};

export default CreateUser;