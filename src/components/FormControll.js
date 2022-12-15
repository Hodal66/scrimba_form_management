import React, { useState } from "react";
import "./form.css";
function FormControll() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "Write short not about me",
    isFriendly: true,
    isEmployed: "",
    isFavColor: "",
  });
  console.log("let us check well::", formData);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.isEmployed
    );
  };

  return (
    <div>
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="your first name"
              name="firstName"
              onChange={handleInputChange}
              value={formData.firstName}
            />
          </div>

          <div>
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              placeholder="your last name"
              name="lastName"
              onChange={handleInputChange}
              value={formData.lastName}
            />
          </div>

          <div>
            <label htmlFor="Email">Enter Email</label>
            <input
              type="text"
              placeholder="your email "
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleInputChange}
              value={formData.isFriendly}
              name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you my friend ? </label>
          </div>
          <div>
            <textarea
              name="comments"
              id="comments"
              onChange={handleInputChange}
              value={formData.comments}
            />
          </div>
          <div>
            <fieldset>
              <legend>Are you employed</legend>
              <div>
                <input
                  type="radio"
                  name="isEmployed"
                  id="full"
                  onChange={handleInputChange}
                  value={formData.isEmployed === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="isEmployed"
                  id="full"
                  onChange={handleInputChange}
                  value={formData.isEmployed === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="isEmployed"
                  id="full"
                  onChange={handleInputChange}
                  value={formData.isEmployed === "not-working"}
                />
                <label htmlFor="not-working">Not Working</label>
              </div>
            </fieldset>
          </div>
          <div>
            <label htmlFor="isFavColor">Choose your favorite color</label>
            <select
              name="isFavColor"
              id="isFavColor"
              onChange={handleInputChange}
              value={formData.isFavColor}
            >
              <option value="--choose--">--choose--</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="black">black</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="silver">silver</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <div className="submit__btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormControll;
