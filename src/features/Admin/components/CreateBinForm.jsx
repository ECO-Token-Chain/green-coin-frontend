import React, { useState } from 'react'
import useCreateDustbin from '../hooks/useCreateDustbin';

function CreateBinForm() {
  const { loading, handleCreateDustbin } = useCreateDustbin();
  const [form, setForm] = useState({
    name: "",
    capacity: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreateDustbin(form.name, Number(form.capacity));
  }

  return (
    <div className='create-bin'>
      <h3>Create Dustbin</h3>

      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          name="name"
          placeholder="Bin Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className='input'
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
        />

        <button disabled={loading} className='btn btn--primary' type="submit">
          {loading ? "Creating..." : "Create Bin"}
        </button>
      </form>
    </div>
  )
}

export default CreateBinForm