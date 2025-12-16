import React from 'react'
import { Link } from 'react-router-dom'

const Status404 = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 max-w-xl w-full">
        <h1 className="text-9xl font-black text-slate-200 mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Status404
