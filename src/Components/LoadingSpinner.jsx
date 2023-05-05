import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-96'>
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#f1c40f"
        innerCircleColor="#1abc9c"
        middleCircleColor="#2c3e50"
      />
    </div>
  )
}

export default LoadingSpinner
