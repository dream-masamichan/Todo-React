import React from 'react'

function Input({ label, textarea, ...props }) {
  const classes =
    'w-full p-1 border-b-2 round-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline focus:border-stone-600'

  return (
    <p className="flex flex-col gap-1 my-4">
      <label>{label}</label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  )
}

export default Input
