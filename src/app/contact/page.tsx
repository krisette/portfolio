"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:hi@krisette.io?subject=Message from ${name}&body=${message} - From ${email}`;
  };

  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:px-16 px-4 py-6">
        <div className="w-full max-w-5xl">
          <div className="flex text-2xl font-bold uppercase text-accent-lightest pb-3 items-center justify-center">
            Contact
          </div>
          <div>
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col items-center w-full"
            >
              Let&#39;s chat, I&#39;d love to hear from you!
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="bg-transparent text-white border border-primary-light w-3/4 lg:w-1/2 my-2 p-2 rounded"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="bg-transparent text-white border border-primary-light w-3/4 lg:w-1/2 my-2 p-2 rounded"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
                className="bg-transparent text-white border border-primary-light w-3/4 lg:w-1/2 my-2 p-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="relative overflow-hidden bg-transparent border-2 border-secondary text-white py-2 px-4 rounded-lg flex items-center group"
              >
                <div className="z-10 flex items-center space-x-2 uppercase">
                  Send It
                </div>
                <span className="absolute top-0 left-0 w-full h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
