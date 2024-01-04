import React, { useRef, useState } from "react";
import { ValidateForm } from "@/utils/VaidateForm";
import { validateEmail } from "@/utils/ValidateEmail";
const ContactForm = () => {
  const defaultData = {
    firstName: "",
    email: "",
    phone: "",
    lastName: "",
    message: "",
  };
  const [data, setData] = useState(defaultData);
  const first_name_ref = useRef();
  const email_ref = useRef();

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const { email } = data;

    if (ValidateForm(data)) {
      alert("Please fill in all the fields");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      email_ref.current.focus();
      return;
    }
    alert("Form submitted successfully!");
    // Perform submission action or further processing
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-3 py-5">
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleInput}
          className="border-b bg-transparent border-black dark:border-gray-500 placeholder:text-black dark:placeholder:text-gray-500 outline-none px-3 py-1"
          placeholder="First Name"
          ref={first_name_ref}
        />
        <input
          type="text"
          value={data.lastName}
          name="lastName"
          onChange={handleInput}
          className="border-b bg-transparent  border-black dark:border-gray-500 placeholder:text-black dark:placeholder:text-gray-500 outline-none px-3 py-1"
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          value={data.email}
          ref={email_ref}
          onChange={handleInput}
          className="border-b bg-transparent  border-black dark:border-gray-500 placeholder:text-black dark:placeholder:text-gray-500 outline-none px-3 py-1"
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleInput}
          maxLength={10}
          className="border-b bg-transparent  border-black dark:border-gray-500 placeholder:text-black dark:placeholder:text-gray-500 outline-none px-3 py-1"
          placeholder="Phone Number"
        />
      </div>
      <div className="grid">
        <label htmlFor="message">Message</label>
        <textarea
          className="border-b bg-transparent outline-none  px-3 py-1  border-black dark:border-gray-500 placeholder:text-black dark:placeholder:text-gray-500 resize-none"
          onChange={handleInput}
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Write your message"
          value={data.message}
        ></textarea>
      </div>
      <button className="bg-emerald-400 px-5 py-2 rounded hover:scale-105 transition-all duration-150 text-black font-semibold my-5">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
