"use client"
import React from 'react';
import Foreground from './Components/Foreground';

const Page = () => {
  return (
    <>    

       <Foreground/>

      <div className='text-center font-semibold text-xl p-3 relative overflow-hidden bg-zinc-800'>
        <h1 className='text-zinc-300/15 uppercase absolute inset-0 z-0'>
          Document
        </h1>
      </div>       

      <div className='h-screen w-full bg-zinc-800 flex justify-center items-center'>
        <h1 className='text-[7vw] text-zinc-500 selection:text-[#fff] selection:bg-black z-[2]'>
          Docs..
        </h1>
      </div>
    </>
  );
};

export default Page;
