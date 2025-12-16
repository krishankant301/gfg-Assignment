import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 max-w-lg w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h1>
        <p className="text-slate-500 mb-8">We'd love to hear from you. Reach out anytime.</p>

        <div className="space-y-6">
          <div className="flex flex-col group p-4 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-1">Phone</span>
            <h3 className="text-lg font-medium text-slate-800 group-hover:text-blue-700 transition-colors">+91-8684******12</h3>
          </div>

          <div className="flex flex-col group p-4 rounded-lg bg-indigo-50/50 hover:bg-indigo-50 transition-colors">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-1">Email</span>
            <h3 className="text-lg font-medium text-slate-800 group-hover:text-indigo-700 transition-colors">Contactus@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
