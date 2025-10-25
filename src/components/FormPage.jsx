import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormValiEmail from "./FormValiEmail";
import SimpleForm from "./SimpleForm";

const FormPage = () => {
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
      setShowSuccessPopup(true);
    }
  };
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
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setmessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nlvjld9", "template_zdsuxvw", form.current, {
        publicKey: "qxtBsAqACVCOH2sxs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="bg-teal-100 min-h-screen pt-[50px]">
        <h2 className="text-[60px] font-normal text-lime-950 text-center">
          FORM
        </h2>
        <div className="container mx-auto px-3 xl:max-w-[1120px]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col justify-center items-center gap-6"
          >
            <div className="w-full">
              <label className="text-lime-950 text-[25px] font-normal">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]"
              />
            </div>
            <div className="w-full">
              <label className="text-lime-950 text-[25px] font-normal">
                Contact
              </label>
              <input
                type="text"
                name="user_mobile"
                value={contact}
                maxLength={10}
                minLength={10}
                onChange={(e) => setContact(e.target.value)}
                required
                className="border-[2px] bg-orange-100 border-solid border-black w-full rounded-[8px] p-[10px]"
              />
            </div>
            <div className="w-full">
              <label className="text-lime-950 text-[25px] font-normal">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[2px] border-solid bg-orange-100 border-black w-full rounded-[8px] p-[10px]"
              />
            </div>
            <div className="w-full">
              <label className="text-lime-950 text-[25px] font-normal">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                name="message"
                className="border-[2px] bg-orange-100 border-solid border-black w-full rounded-[8px] p-[10px]"
                required
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="border border-solid text-white text-[25px] font-normal bg-lime-950 border-lime-950 cursor-pointer py-[12px] px-[40px] rounded-[12px]"
            />
          </form>
        </div>
        {/* -----------------------------form validition-------------------- */}
        <div className="py-[80px] w-full container mx-auto px-3 xl:max-w-[1120px]">
          <h2 className="text-[60px] font-normal text-lime-950 text-center pb-5">
            FORM VALIDATION
          </h2>
          <form
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
              <p>Form submitted successfully!</p>
              <button onClick={handlePopupClose}>Close</button>
            </div>
          )}
        </div>
        {/* -------------------------form validition with email js--------------------- */}
        <div className="w-full container mx-auto px-3 xl:max-w-[1120px]">
          <FormValiEmail />
        </div>
        {/* ------------------------ReCAPTCHA Form------------------------ */}
        <div className="py-[80px] w-full container mx-auto px-3 xl:max-w-[1120px]">
          <h2 className="text-[60px] font-normal text-lime-950 text-center pb-5">
            FORM
          </h2>
          <SimpleForm />
        </div>
      </div>
    </>
  );
};

export default FormPage;
