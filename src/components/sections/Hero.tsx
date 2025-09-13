import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-row items-center justify-center'>
          <div className='flex flex-col items-center justify-center mt-20 w-1/2 text-left'>
            <div className='text-5xl font-medium'>
              I'm a Full-Stack Developer who likes to build engaging and user friendly web applications.
            </div>
            <div className='mt-2 text-lg text-gray-600'></div>
            I am passionate about creating seamless digital experiences that captivate users and drive business growth. With a strong foundation in both front-end and back-end technologies.
          </div>
          <div className='w-1/2 flex items-center justify-center'>
            <Image
              src='/images/image-1.png'
              alt='image-1'
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero