import React, { useState, useRef } from "react";
import Typewriter from "../components/Typewriter";
import { down_icon } from "../assets/images/WORK";
import SectionTitle from "../components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import {
  instagram,
  facebook,
  spotify,
  linkedin,
  github,
} from "../assets/social";
import emailjs from "@emailjs/browser";
import MetaTag from "../components/MetaTag";
import { HelmetProvider } from "react-helmet-async";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleContactForm = () => {
    setShowForm(!showForm);
  };

  return (
    <HelmetProvider>
      <section id="contact-section" className="min-h-screen bg-dark-background">
        <MetaTag
          title="Kokwan.M - Creative Designer & Developer | Portfolio Showcase"
          description="Explore Kokwan.M's Portfolio Website featuring a diverse range of innovative design and development projects. Discover unique creations that blend creativity with technology."
        />
        <div
          name="inner"
          className={` ${showForm && "pb-60"} mx-[5%] pt-[5%] relative pb-24`}
        >
          <SectionTitle
            title="Let's Work Together"
            textColor="text-[#FFFF]"
            LeftlineStyleMobile="white-pencil-style-right-to-left"
            RightlineStyleMobile="white-pencil-style-left-to-right"
            lineStyleTablet="white-pencil-style-left-to-right"
          />

          <div className="tablet:flex justify-between">
            <div
              name="contact-socials-container"
              className="tablet:order-2 flex flex-col justify-center items-center space-y-10 pt-10 tablet:pt-[5vw] tablet:absolute tablet:right-[2vw] breakpoint:right-[7vw] laptop:right-[9vw] desktop:right-[11vw]"
            >
              <div name="contact-container">
                <Typewriter
                  text="「CONTACT DETAILS」"
                  delay={0.05}
                  className="font-japan-bold text-[0.65rem] leading-7 text-[#666768] mb-3"
                />
                <p className="text-white-100 font-japan mb-1 ml-2">
                  kokwan.m@gmail.com
                </p>
                <p className="text-white-100 font-japan ml-2">
                  +66 80 594 5005
                </p>
              </div>
              <div
                name="socials-container"
                className="mr-[3.5rem] flex flex-col"
              >
                <Typewriter
                  text="「SOCIALS」"
                  delay={0.05}
                  className="font-japan-bold text-[0.65rem] leading-7 text-[#666768] mb-3"
                />
                <a
                  href="https://instagram.com/fuyunohibi/"
                  target="_blank"
                  className="text-white-100 font-japan mb-1 ml-2"
                >
                  <img
                    src={instagram}
                    alt="Instagram icon"
                    className="w-4 h-4 inline-block mr-2"
                  />
                  Instagram
                </a>
                <a
                  href="https://m.facebook.com/kokwan.mongkholtham/"
                  target="_blank"
                  className="text-white-100 font-japan mb-1 ml-2"
                >
                  <img
                    src={facebook}
                    alt="Facebook icon"
                    className="w-4 h-4 inline-block mr-2"
                  />
                  Facebook
                </a>
                <a
                  href="https://open.spotify.com/user/3yzjge3ncurq2bdfebhi7ttir?si=3nG3UCNOTb6snNDRScD9uA&nd=1/"
                  target="_blank"
                  className="text-white-100 font-japan mb-1 ml-2"
                >
                  <img
                    src={spotify}
                    alt="Spotify icon"
                    className="w-4 h-4 inline-block mr-2"
                  />
                  Spotify
                </a>
                <a
                  href="https://www.linkedin.com/in/ko-kwan-mongkholtham-8588b0248/"
                  target="_blank"
                  className="text-white-100 font-japan mb-1 ml-2"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn icon"
                    className="w-4 h-4 inline-block mr-2"
                  />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/fuyunohibi/"
                  target="_blank"
                  className="text-white-100 font-japan mb-1 ml-2"
                >
                  <img
                    src={github}
                    alt="Github icon"
                    className="w-4 h-4 inline-block mr-2"
                  />
                  Github
                </a>
              </div>
            </div>

            <div
              name="form-container"
              className="tablet:order-1 pt-20 tablet:pt-8 tablet:absolute tablet:left-0"
            >
              <div className="flex justify-center tablet:justify-start">
                <Typewriter
                  text="Get In Touch"
                  delay={0.05}
                  className="text-xl breakpoint:text-3xl font-japan-bold text-white-100"
                />
              </div>
              <div
                name="icon-container"
                className="mt-4 w-6 h-6 rounded-full bg-transparent mx-auto tablet:ml-0"
              >
                <motion.img
                  onClick={toggleContactForm}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: showForm ? 180 : 0 }}
                  src={down_icon}
                  alt="down icon"
                  className="w-6 h-6 filter invert"
                />
              </div>
            </div>

            <AnimatedContent display={showForm} />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

const AnimatedContent = ({ display }) => (
  <AnimatePresence>
    {display && (
      <motion.div
        variants={staggerContainer(0.1)} // Add this line
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <ContactForm />
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactForm = () => {
  const formRef = useRef();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!form.name.trim()) {
      setNameError("Please enter a valid name.");
      isValid = false;
    } else {
      setNameError("");
    }

    // A very simple email validation check
    if (!form.email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (
      !form.message ||
      form.message.length < 3 ||
      form.message.length > 3000
    ) {
      setMessageError("Please enter a message to send (3-3000 characters).");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!isValid) {
      return; // early return if form is not valid
    }

    setLoading(true);

    emailjs
      .send(
        "service_qgol0aa",
        "template_9ft8upx",
        {
          from_name: form.name,
          to_name: "Kokwan",
          from_email: form.email,
          to_email: "kokwan.m@gmail.com",
          organization: form.organization,
          services: form.services,
          message: form.message,
        },
        "SPz-ipa5MrVvSZmck"
      )
      .then(() => {
        setLoading(false);
        alert(
          "Your message has been sent successfully!. I will get back to you as soon as possible."
        );

        setForm(
          {
            name: "",
            email: "",
            organization: "",
            services: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong, please try again.");
          }
        );
      });
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-16 tablet:mt-40 text-white-100 tablet:w-[55vw] -mb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="mt-10 mx-[10%]">
            <label
              htmlFor="name"
              className="block font-japan-bold text-md laptop:text-lg text-white-100"
            >
              What's your name? *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe *"
              className="block w-full mt-2  py-2 text-white bg-transparent placeholder:text-[#666768] placeholder:font-japan focus:outline-none "
            />
            {nameError && (
              <p className="font-japan-bold text-red-600">{nameError}</p>
            )}
          </div>
        </motion.div>
        <hr className="mt-9 mb-9 border border-[#666768]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="mt-10 mx-[10%]">
            <label
              htmlFor="email"
              className="block font-japan-bold text-md laptop:text-lg text-white-100"
            >
              What's your email? *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              id="email"
              placeholder="john@doe.com *"
              className="block w-full mt-2 py-2 text-white bg-transparent placeholder:text-[#666768] placeholder:font-japan focus:outline-none "
            />
            {emailError && (
              <p className="font-japan-bold text-red-600">{emailError}</p>
            )}
          </div>
        </motion.div>
        <hr className="mt-9 mb-9 border border-[#666768]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="mt-10 mx-[10%]">
            <label
              htmlFor="organization"
              className="block font-japan-bold text-md laptop:text-lg text-white-100"
            >
              What's the name of your organization?
            </label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              id="organization"
              placeholder="John & Doe ®"
              className="block w-full mt-2  py-2 text-white bg-transparent placeholder:text-[#666768] placeholder:font-japan focus:outline-none "
            />
          </div>
        </motion.div>
        <hr className="mt-9 mb-9 border border-[#666768]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="mt-10 mx-[10%]">
            <label
              htmlFor="services"
              className="block font-japan-bold text-md laptop:text-lg text-white-100"
            >
              What services are you looking for?
            </label>
            <textarea
              type="text"
              name="services"
              value={form.services}
              onChange={handleChange}
              id="services"
              rows="4"
              placeholder="Web Development,&nbsp; Mobile Development,&nbsp; UX/UI Design,&nbsp; etc."
              className="block w-full mt-2  py-2  text-white bg-transparent placeholder:text-[#666768] placeholder:font-japan focus:outline-none "
            />
          </div>
        </motion.div>
        <hr className="mt-9 mb-9 border border-[#666768]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="mt-10 mx-[10%]">
            <label
              htmlFor="message"
              className="block font-japan-bold text-md laptop:text-lg text-white-100"
            >
              Your message *
            </label>
            <textarea
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              id="message"
              rows="4"
              placeholder="Hello Captain,&nbsp; can you help me with *"
              className="block w-full mt-2  py-2  text-white bg-transparent placeholder:text-[#666768] placeholder:font-japan focus:outline-none "
            />
            {messageError && (
              <p className="font-japan-bold text-red-600">{messageError}</p>
            )}
          </div>
        </motion.div>
        <hr className="mt-9 border border-[#666768]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="flex justify-center tablet:justify-center laptop:justify-start mt-16">
            <button type="submit" className="liquidButton ">
              <span>{loading ? "Send!" : "Send"}</span>
              <div className="liquid"></div>
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
