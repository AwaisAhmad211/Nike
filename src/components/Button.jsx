import React from 'react'


const Button = ({label,arrowRight,backgroundColor,borderColor,textColor}) => {
  return (
    
            <button className={`text-xl text-center items-center mt-10 rounded-full border-2
            ${
              backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` :
              "bg-coral-red border-coral-red text-white"
            }
            py-3 px-7 flex gap-2`}> {label} {arrowRight && (
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
