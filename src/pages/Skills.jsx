import React from 'react'
import SkillsLeft from '../components/Skills/SkillsLeft'
import SkillsRyt from '../components/Skills/SkillsRyt'



const Skills = () => {
  return (
    <div className='w-full sm:py-[35px] sm:px-[10%] px-[7%] overflow-x-hidden ' id='skills'>
      <main className='grid sm:grid-cols-2 gap-x-10'>
      <SkillsLeft />
      <SkillsRyt/>
      </main>
    </div>
  )
}

export default Skills
