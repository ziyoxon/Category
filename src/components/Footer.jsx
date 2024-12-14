import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 ">
      <div className="container  grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">3legant.</h2>
          <p>43111 Hai Trieu street,</p>
          <p>District 1, HCMC</p>
          <p>Vietnam</p>
          <p className="mt-2">84-756-3237</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Page</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Shop</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Product</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Articles</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <a href="#">Shipping Policy</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Return & Refund</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">Support</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Join Newsletter</h3>
          <p className="mb-4">
            Subscribe our newsletter to get more deals, new products and
            promotions.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-full px-4 py-2 focus:outline-none"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-full transition duration-300">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="border-t mt-12 py-4 flex items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center gap-4">
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <span className="hidden md:block">|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>

        <div className="flex gap-4">
          <img src="src/assets/visa.png" alt="Visa" className="h-6" />
          <img
            src="src/assets/ameri.png"
            alt="American Express"
            className="h-6"
          />
          <img src="src/assets/master.png" alt="MasterCard" className="h-6" />
          <img src="src/assets/stripe.png" alt="Stripe" className="h-6" />
          <img src="src/assets/paypal.png" alt="PayPal" className="h-6" />
          <img src="src/assets/apppay.png" alt="Apple Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
