import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const FormValiEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.password.test(formData.password)) {
      errors.password = "Password is invalid.";
    }
    if (!regex.confirmPassword.test(formData.confirmPassword)) {
      errors.confirmPassword = "Confirm password is invalid.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm("service_nlvjld9", "template_l7jjvqj", form.current, {
          publicKey: "qxtBsAqACVCOH2sxs",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setShowSuccessPopup(true);
      if (showSuccessPopup === true) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  };
  const form = useState();
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("service_nlvjld9", "template_l7jjvqj", form.current, {
  //       publicKey: "qxtBsAqACVCOH2sxs",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };
  return (
    <>
      <div className="pb-[80px] w-full container mx-auto px-3 xl:max-w-[1120px]">
        <p className="text-[30px] font-normal text-lime-500 text-center pb-5">
          Month: April
        </p>
        <h2 className="text-[60px] font-normal text-lime-950 text-center pb-5">
          Form Validation with Email Js
        </h2>
        <form
          ref={form}
          className="registration-form w-full flex justify-center items-center flex-col"
          onSubmit={handleSubmit}
        >
          <div className="form-group w-full">
            <label
              className="text-lime-950 text-[25px] font-normal"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]"
              // className={formErrors.name ? "error" : ""}
            />
            {formErrors.name && (
              <p className="error-message">{formErrors.name}</p>
            )}
          </div>
          <div className="form-group w-full">
            <label
              className="text-lime-950 text-[25px] font-normal"
              htmlFor="number"
            >
              Number:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={`${
                formErrors.number ? "error" : ""
              } border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]`}
            />
            {formErrors.number && (
              <p className="error-message">{formErrors.number}</p>
            )}
          </div>
          <div className="form-group w-full">
            <label
              className="text-lime-950 text-[25px] font-normal"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${
                formErrors.password ? "error" : ""
              } border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]`}
            />
            {formErrors.password && (
              <p className="error-message">{formErrors.password}</p>
            )}
          </div>
          <div className="form-group w-full">
            <label
              className="text-lime-950 text-[25px] font-normal"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`${
                formErrors.confirmPassword ? "error" : ""
              }border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]`}
            />
            {formErrors.confirmPassword && (
              <p className="error-message">{formErrors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="submit-button border border-solid text-white text-[25px] font-normal bg-lime-950 border-lime-950 cursor-pointer py-[12px] px-[40px] rounded-[12px]"
          >
            Submit
          </button>
        </form>
        {showSuccessPopup && (
          <div className="success-popup">
            <div className="success-popup-box">
              <p>Form submitted successfully!</p>
              <button onClick={handlePopupClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormValiEmail;
