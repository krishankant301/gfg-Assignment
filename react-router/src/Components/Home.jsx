import React from 'react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-center px-4">
      <div className="max-w-2xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-6">
          Welcome to my <span className="text-indigo-600">Home page</span>.
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
          Experience a modern, responsive design built with React and Tailwind CSS.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
