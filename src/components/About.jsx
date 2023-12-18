import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-[#1e293b] to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className=' text-4xl font-bold inline border-b-4 border-yellow-500 m-1'>About</p>
            </div>
            <p className=' text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque molestiae alias harum unde facere deleniti ad obcaecati pariatur, quos assumenda ratione nisi, perspiciatis, possimus quidem vitae corporis. Earum quo excepturi aliquam maiores atque. Beatae esse minima facilis voluptas quaerat sit nobis soluta cupiditate, vel corrupti nam velit iure perferendis neque.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur maxime tempora voluptatum voluptatibus magni perferendis dolor voluptatem! Nisi tempore dolores, cum ipsam quia molestiae aut sapiente, obcaecati quis iste deleniti?
            </p>
        </div>
    </div>
  )
}

export default About