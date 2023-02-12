import React from 'react'
import image from "../Components/image/calculator.svg";

function Image() {
  return (
        <>
            <div 
                className='main-image-container'
                style={{
                    width: "55%",
                }}
            >
                <img src={image} 
                    style={{
                        width:"100%",
                        height: "600px"
                    }}
                />
            </div>
        </>
  )
}

export default Image