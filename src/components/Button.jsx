import React from 'react'


const Button = ({label,arrowRight,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    
    <button
    className={`flex justify-center items-center gap-2 px-7 mt-8 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full mt-0"}`}
  >
    {label}

    {arrowRight && (
      <img
        src={arrowRight}
        alt='arrow right icon'
        className='ml-2 rounded-full bg-white w-5 h-5'
      />
    )}
  </button>
  )
}

export default Button
