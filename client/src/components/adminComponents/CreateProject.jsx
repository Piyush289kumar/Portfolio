import React from 'react'

function CreateProject() {
  return (
    <div className='p-3 backdrop-blur-3xl rounded-md w-fit mx-auto mt-10'>
      <h1 className='text-3xl lg:text-5xl text-white mb-7 px-3'>Create Project</h1>
      <form className='flex flex-col gap-3'>
        <input type="text" name="name" id="name" required placeholder='Project Name' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText' />

        <textarea name="des" rows='5' id="des" placeholder='Project Description' className='bg-transparent px-3 py-2 border rounded-3xl w-full lg:w-[40vw] font-bold text-xl gradientText' ></textarea>

        <div>
          <label htmlFor="img">Project Image: </label>
          <input type="file" name="img" id="img" />
        </div>

        <input type="text" name="githubLink" id="name" required placeholder='Github Link' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText' />

        <input type="text" name="hostedLink" id="name" required placeholder='Hosted Link' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText' />

        <button type="submit" className='bg-purple-500 px-3 py-2 border rounded-full mx-auto w-64 font-bold text-xl text-white'>Create Project</button>
      </form>
    </div>
  )
}

export default CreateProject