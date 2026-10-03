import React from 'react'

const NotesCards = ({ note }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 w-full max-w-md flex flex-col gap-2">
      <h1 className="text-white font-semibold text-lg">{note.title}</h1>
      <p className="text-gray-400 text-sm">{note.description}</p>

      <div className="flex gap-2 mt-2">
        <button
          className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg px-3 py-2 transition-colors"
        >
          Update
        </button>
        <button
          className="flex-1 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-medium rounded-lg px-3 py-2 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NotesCards