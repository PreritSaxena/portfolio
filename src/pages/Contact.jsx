import { Suspense, useRef } from "react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Fox } from "../models/Fox";
import Loader from "../components/Loader";
import { Canvas } from '@react-three/fiber'
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
 
  const formRef = useRef(null);
  const [form , setForm] = useState({name: "" , email:"" , message : ""})
  const [isLoading , setIsLoading] = useState(false);
  const [currentAnimation , setCurrentAnimation] =  useState('idle')

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Prerit Saxena",
        from_email: form.email,
        to_email: 'contact@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      })

      setTimeout(() => {
      hideAlert(false);
     setCurrentAnimation("idle");
       setForm({
      name: "",
      email: "",
      message: "",
    });
  }, [3000]);
      // alert("Thank you for your message 😃");
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.error(error);
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    
    })
  };


  return (
    <div>
    <section className="relative flex lg:flex-row flex-col max-container ">
        {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-white">Get In Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-white font-semibold">Name
          <input
          type="text"
          name="name"
          className="input"
          placeholder="Enter your name"
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          </label>

          <label className="text-white font-semibold">Email
          <input
          type="email"
          name="email"
          className="input"
          placeholder="example@gmail.com"
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          </label>

          <label className="text-white font-semibold">Your Message
          <textarea
          name="message"
          className="input"
          placeholder="Let me know how I can help you!"
          required
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          </label>

          <button 
          type="submit"
          className="btn"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
            
          </button>
        </form>
        <div className="footer-container mx-auto flex justify-between items-center mt-10">

        <div className="flex space-x-4">
          <a href="https://github.com/PreritSaxena" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/prerit-saxena-930774229/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/_preritsaxena_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <SiLeetcode  size={24} />
          </a>
          <a href="preritsaxena2103@gmail.com" target="_blank"  className="text-gray-400 hover:text-white">
            <FaEnvelope size={24} />
          </a>
        </div>
        </div>

      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>

    </section>
   
    </div>
  );
};

export default Contact;
