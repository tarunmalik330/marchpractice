import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SimpleForm = () => {
  const [verified, setVerified] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verified) {
      alert("please verify that you are not a robot!");
      return;
    }
    alert("Form submitted Successfully!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" action="">
        <div>
          <label className="text-xl">Name:</label>
          <input
            required
            type="text"
            name="name"
            className="border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]"
          />
        </div>
        <div>
          <label className="text-xl">Last Name:</label>
          <input
            required
            type="text"
            name="last name"
            className="border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]"
          />
        </div>
        <div>
          <label className="text-xl">Number:</label>
          <input
            required
            type="number"
            name="last name"
            className="border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]"
          />
        </div>
        <div>
          <label className="text-xl">Message:</label>
          <input
            required
            type="text"
            name="last name"
            className="border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]"
          />
        </div>
        <div className="mx-auto">
          <ReCAPTCHA
            sitekey="6LeWlPYrAAAAAMi3VVrvhMiXCBKDEEcYGvk9w1fB"
            onChange={() => setVerified(true)}
          />
        </div>
        <button
          type="submit"
          className="text-xl bg-orange py-2 px-5 w-max text-white rounded mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
