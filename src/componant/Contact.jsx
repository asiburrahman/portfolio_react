import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaUser, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_phyrw2g", "template_pgvv64r",
        formRef.current, {
          publicKey: '8Vxj2tq6srygft85z',
        }
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully!',
            showConfirmButton: false,
            timer: 2000
          });
          formRef.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Failed to send message',
            text: 'Try again later.',
          });
          console.log(error);
        }
      );
  };

  return (
    <motion.div
      id="contacts"
      className="w-11/12 mx-auto p-6 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info and Map */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4 text-base">
            <div className="flex items-center"><FaUser className="text-accent mr-3" /><span className="font-medium">Asibur Rahman</span></div>
            <div className="flex items-center"><FaEnvelope className="text-accent mr-3" /><a href="mailto:asibur70@gmail.com" className=" hover:underline">asibur70@gmail.com</a></div>
            <div className="flex items-center "><FaPhone className="text-accent mr-3  "  /><span>+8801747311512</span></div>
            <div className="flex items-center"><FaWhatsapp className="text-accent mr-3" /><span>+8801747311512</span></div>
            <div className="flex items-center"><FaMapMarkerAlt className="text-accent mr-3" /><span>Mirpur-6, Dhaka, Bangladesh</span></div>
          </div>
          <div className="mt-6 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5017177686354!2d90.36650917583227!3d23.763697278679735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10dc1c12765%3A0xd6242656ccf25262!2sMirpur%206%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1719749613569!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className=" p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <input type="hidden" name="to_email" value="asibur70@gmail.com" />
          <div>bg-g
            <label className="block font-medium mb-1">Name</label>
            <input type="text" className="input input-bordered w-full" name="user_name" required />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Your Email</label>
            <input name="user_email" type="email" className="input input-bordered w-full" required />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea name="message" className="textarea textarea-bordered w-full" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
