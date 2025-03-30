import React from 'react'
import Input from './Input'

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button type="button">Cancel</button>
        </li>
        <li>
          <button type="submit">Save</button>
        </li>
      </menu>
      <div>
        <Input id="title" label="Title" />
        <Input id="description" label="Description" textarea />
        <Input id="due-date" label="Due Date" />
      </div>
    </div>
  )
}
