import React from 'react'

const CommontSection = ({title}) => {
  return (
    <section className='flex justify-center items-center'>
        <div className='contaianer  mx-auto text-[40px] text-white font-bold'>{title}</div>
    </section>
  )
}

export default CommontSection
