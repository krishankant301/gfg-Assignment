import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(c => c + 1);
  }
  
  const decrement = () => {
    if (count > 0) {
        setCount(c => c - 1);
    }
  }
  
  const arr = [];
  for(let i = 0; i < count; i++){
    arr.push(i + 1);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 font-sans text-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Counter App</h1>
        
        <p className="text-xl mb-6 font-medium">
          Value of counter is: <span className="text-blue-600 font-bold text-2xl">{count}</span>
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={increment}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 border border-blue-200"
          >
            Increment +
          </button>
          <button 
            onClick={decrement}
            className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-6 rounded-lg transition-colors duration-200 border border-red-100"
            disabled={count === 0}
          >
            Decrement -
          </button>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-600">Circles</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {arr.length === 0 ? (
                <p className="text-gray-400 italic text-sm">No circles to display</p>
            ) : (
                arr.map((ele, index) => (
                <div 
                    key={index} 
                    className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100 shadow-sm animate-in fade-in zoom-in duration-300"
                >
                    {ele}
                </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
