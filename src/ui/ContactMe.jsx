import { Form } from "react-router-dom";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Button from "../components/Button";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zvg1t73",
        "template_8dzkg3h",
        form.current,
        "SuBDOEjKB8HMsJqVj",
      )
      .then(
        (result) => {
          console.log(result.text);
          // This clears the form.
          e.target.reset();
          toast.success("Message sent. Thank you!");
        },
        (error) => {
          toast.error(error.text);
        },
      );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

export default ContactMe;
