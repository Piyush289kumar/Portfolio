import React from 'react'

function CreateProject() {
  return (
    <div className='p-3 backdrop-blur-3xl rounded-md w-fit mx-auto mt-10'>
      <h1 className='text-3xl lg:text-5xl text-white mb-5'>Create Project</h1>
      <form className='flex flex-col gap-3'>
        <input type="text" name="name" id="name" required placeholder='Project Name' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl ' />
      </form>
    </div>
  )
}

export default CreateProject