import React from 'react'

function CreateSkill() {
  return (
    <div className='p-3 backdrop-blur-3xl rounded-md w-fit max-auto mt-10'>
      <h1 className='text-3xl lg:text-5xl text-white mb-7 px-3'>Create Skill</h1>

      <form className='flex flex-col gap-3'>
        <input type="text" name="skillName" id="skillName" required placeholder='Skill Name' className='bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText' />

        <input type="number" name="skillLevel" id="skillLevel" placeholder='Skill Level' required className='bg-transparent pax-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText' />

        <button type="submit" className='bg-purple-500 px-3 py-2 border rounded-full mx-auto w-64 font-bold text-xl text-white'>Add Skill</button>

      </form>

    </div>
  )
}

export default CreateSkill