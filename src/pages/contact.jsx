import React from 'react';
import Layout from "../Layout/Curve"

const Contact = () => {
  return (
    <>
    
    <Layout>

    <div className="w-full min-h-screen px-4 bg-white py-16  flex items-center justify-center">
  <form className="w-full max-w-5xl  p-8 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="md:col-span-2">
      <h2 className="text-3xl font-bold text-gray-800">contact us</h2>
      <h4 className="text-gray-500 mt-2">Let’s make something great together.</h4>
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700"><h4>Name</h4></label>
      <input
        type="text"
        placeholder="Your name"
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700"><h4>Email</h4></label>
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700"><h4>Phone</h4></label>
      <input
        type="tel"
        placeholder="+1 234 567 890"
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700"><h4>Subject</h4></label>
      <input
        type="text"
        placeholder="What’s this about?"
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
      />
    </div>

    <div className="md:col-span-2">
      <label className="block mb-2 text-sm font-medium text-gray-700"><h4>Message</h4></label>
      <textarea
        rows="5"
        placeholder="Type your message here..."
        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-zinc-900 focus:outline-none"
      ></textarea>
    </div>

    <div className="md:col-span-2">
      <button
        type="submit"
        className="w-full bg-zinc-900 text-white font-semibold py-3 rounded-lg hover:bg-zinc-800 transition duration-200"
      >
        Send Message
      </button>
    </div>
  </form>
</div>


    </Layout>
    </>
    
  );
};

export default Contact; 