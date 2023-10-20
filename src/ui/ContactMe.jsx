import { Form } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "../components/Button";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          // This clears the form.
          e.target.reset();
          window.alert("Message sent. Thank you!");
        },
        (error) => {
          console.error(error.text);
        },
      );
  };

  return (
    <div>
      <h1 className="mb-4 text-4xl font-black sm:mb-6 md:mb-8 md:text-5xl">
        Contact Me
      </h1>
      <div className="border-t-2 border-profile">
        <p className="mt-6 text-2xl font-semibold md:text-3xl xl:text-4xl">
          Hi! feel free to send me a message.
        </p>
        <Form ref={form} onSubmit={sendEmail}>
          <div className="mt-10 flex flex-col">
            <label className="text-lg font-medium md:text-xl xl:text-2xl">
              Name:
            </label>
            <input type="text" name="name" className="form-input" />
          </div>
          <div className="mt-10 flex flex-col">
            <label className="text-lg font-medium md:text-xl xl:text-2xl">
              Email:
            </label>
            <input type="text" name="email" className="form-input" />
          </div>
          <div className="mt-10 flex flex-col">
            <label className="text-lg font-medium md:text-xl xl:text-2xl">
              Message:
            </label>
            <textarea
              name="message"
              rows="5"
              className="form-input resize-none"
            />
          </div>
          <div className="mt-10">
            <Button type="submit">
              Send Message <i className="fa-solid fa-paper-plane" />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContactMe;