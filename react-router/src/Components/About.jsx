import React from 'react'

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border border-slate-100 transform transition-all hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-6 border-l-4 border-blue-500 pl-4">
          About Us
        </h1>
        <div className="text-lg text-slate-600 leading-relaxed space-y-4">
          <p>
            This is an <span className="font-semibold text-blue-600">About page</span>. We are dedicated to creating beautiful web experiences using modern technologies.
          </p>
          <p>
            Our mission is to simplify complex problems with elegant solutions, served with a side of good aesthetics.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
