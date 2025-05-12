'use client'
import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import React, { ChangeEvent, useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    'title': '',
    'description': '',
    'visibility': '',
  });
  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const [error, serError] = useState(null);
  return (
    <div className='wrapper-md upload-page'>
      <h1>upload a video</h1>
      {error && <div className='error-field'>{error}</div>}
      <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5 ' action="
      
      ">

        <FormField
          id='title'
          label='Title'
          value={'formData.title'}
          type='text'
          onChange={handleInputChange}
          placeholder='Enter a clear and concise title' value={''}
        />
        <FormField
          id='title'
          label='Title'
          value={'formData.title'}
          type='text'
          onChange={handleInputChange}
          placeholder='Enter a clear and concise title' value={''}
        />
        <FileInput />
      </form>

    </div>
  )
}

export default page
