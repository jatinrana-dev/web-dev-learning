import React, { useState } from 'react'
import axios from "axios";

const App = () => {
  const [formvalues,setFormvalues] = useState({
    title: "",
    description: ""
  }
  )
  const handleChange = (e) =>{
    setFormvalues((prev) =>({...prev , [e.target.name]:e.target.value})) }
    const handleSubmit =  async(e)=>{
      e.preventDefault()
//api call 

let res  =  await axios.post("http://localhost:2501/notes/create" , formvalues)

      console.log(formvalues)
      setFormvalues({ title: "", description: "" })

      
    }
     

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">
        📝 Notes App
      </h1>

      <form onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl shadow-black/30 justify-center items-center w-full max-w-md flex flex-col gap-4 p-8">
        <input
        onChange={handleChange}
        name='title'
          type="text"
          value={formvalues.title}
          placeholder="Title"
          className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none border border-transparent focus:border-indigo-500 transition-colors"
        />
        <textarea
        onChange={handleChange}
        name='description'
        value={formvalues.description}
          placeholder="Description"
          rows="4"
        
          className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none border border-transparent focus:border-indigo-500 transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium rounded-lg px-4 py-3 transition-colors"
        >
          Add Note
        </button>
      </form>
    </div>
  )
}

export default App