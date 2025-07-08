import React from "react";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaReddit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C101A] text-gray-400 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand + Social */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-white text-2xl font-semibold">StrawPoll</h1>
          <p className="max-w-xs">
            Making it easy to create instant, real-time polls and surveys for
            free.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaDiscord />
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
            <FaGithub />
            <FaReddit />
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">SOLUTIONS</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Poll Maker</li>
            <li className="hover:underline cursor-pointer">Meeting Scheduler</li>
            <li className="hover:underline cursor-pointer">Discord Bot</li>
            <li className="hover:underline cursor-pointer">Poll API</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Guides</li>
            <li className="hover:underline cursor-pointer">F.A.Q.</li>
            <li className="hover:underline cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Imprint</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-10 text-gray-500">
        © 2025 StrawPoll. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
