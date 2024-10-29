import React from 'react';

export default function FinanceHero() {
  return (
    <div className="bg-gradient-to-br from-teal-900 to-blue-900 min-h-screen p-8 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-green-400">Upgrade</div>
          <ul className="flex space-x-8 text-lg">
            <li>Personal Loan</li>
            <li>One Card</li>
            <li>Savings</li>
            <li>Checking</li>
            <li>Help</li>
          </ul>
        </div>
        <button className="border border-white rounded-full px-4 py-1 text-lg">Sign In</button>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center mt-12">
        {/* Left Side - Text */}
        <div className="w-1/2">
          <div className="bg-gray-800 rounded-full px-4 py-1 text-sm inline-block mb-4">
            🔥 100% Trusted Platform
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Finance with Security and <span className="text-yellow-400">Flexibility</span>
          </h2>
          <p className="text-lg mb-6">
            No-Fee Checking Account With Cash Back Rewards. Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full flex items-center">
            Open Account
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="relative w-1/2 flex justify-center">
          <div className="relative w-64 h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300x600" // Replace with actual image URL of the phone screen
              alt="Phone Mockup"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Card Image */}
          <div className="absolute -bottom-8 -left-12 w-40 h-24 bg-green-600 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-white font-bold text-lg">OneCard</div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex justify-center space-x-8 mt-12 text-gray-400">
        <span>Spherule</span>
        <span>Samsung Pay</span>
        <span>Visa</span>
        <span>Amazon Pay</span>
        <span>PayPal</span>
        <span>Alipay</span>
      </div>
    </div>
  );
}






import React from 'react';

export default function TrustSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-teal-900 p-8">
      {/* Left Side - Phone Mockup */}
      <div className="relative w-1/2 max-w-xs">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          {/* Mockup of the phone screen */}
          <img
            src="https://via.placeholder.com/300x600" // Replace this with actual image URL of the phone screen
            alt="Phone Mockup"
            className="w-full"
          />
        </div>
        <div className="absolute -bottom-8 left-12 w-40 h-24 bg-green-600 rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-white font-bold text-lg">Upgrade Card</div>
        </div>
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-1/2 ml-12 text-white">
        <div className="bg-green-800 rounded-full px-4 py-1 text-sm inline-block mb-4">
          🔥 TRUSTWORTHINESS
        </div>
        <h2 className="text-4xl font-bold mb-4">We Value Your Trust and Security</h2>
        <p className="text-lg mb-6">
          Our mission is to make finance more accessible, transparent, and secure for everyone.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full flex items-center">
          Get Started
          <span className="ml-2 text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
