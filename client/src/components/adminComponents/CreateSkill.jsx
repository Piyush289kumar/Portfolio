import React from 'react'

function CreateSkill() {
  return (
    <div className='p-3 backdrop-blur-3xl rounded-md w-fit max-auto mt-10'>
      <h1 className='text-3xl lg:text-5xl text-white mb-7 px-3'>Create Skill</h1>

    <form className='flex flex-col gap-3'>
    <input type="text" name="skillName" id="skillName" required placeholder='Skill Name' className=''/>
    </form>

    </div>
  )
}

export default CreateSkill