
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("https://formspree.io/f/xyzpnwwz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-17432610093/XXXXXXXXXXXXXXX",
          });
        }

        setTimeout(() => navigate("/thank-you"), 1500);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

        {status === "SUCCESS" && (
          <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
            Message sent successfully! Redirecting...
          </div>
        )}
        {status === "ERROR" && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
            Sorry, there was an error sending your message. Please try again or contact us directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
