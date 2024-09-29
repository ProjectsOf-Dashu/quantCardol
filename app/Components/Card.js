"use client";  // Ensure client-side rendering

import React from 'react';
import { easeIn, easeOut, motion } from 'framer-motion';  // Import motion from framer-motion
import { FaFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Card = ({ data, reference }) => {
  return (
    <motion.div 
      className='h-72 w-60 px-5 py-6 bg-zinc-500 text-white rounded-[30px] relative shadow-lg'
      drag dragConstraints={reference} whileDrag={{scale: 1.1, duration: 3, ease: easeIn}} dragTransition={{bounceStiffness: 600, bounceDamping : 15}} 
    >
      <div className='header-detail space-y-4'>
        <span><FaFileAlt /></span>
        <p className='font-semibold'>{data.title}</p>
      </div>

      <div className='flex justify-between items-center p-4 font-semibold mb-5'>
        <h3 className='text-sm'>{data.fileSize}</h3>
        {data.closeBtn ? 
          (<span className='bg-gray-300 rounded-full text-gray-600 font-semibold'>
            <IoIosClose size={"1.5rem"} />
          </span>) 
          : (<FaArrowUpRightFromSquare />)}
      </div>

      {data.progressDetail.tagIsOpen ? (
        <div 
          className={`py-5 text-white font-semibold cursor-pointer flex justify-center items-center absolute left-0 bottom-0 right-0 rounded-br-[30px] rounded-bl-[30px]`}
          style={{ backgroundColor: data.progressDetail.tagColor || 'green' }}
        >
          <h4>{data.progressDetail.tagTitle}</h4>
        </div>
      ) : null}
    </motion.div>
  );
}

export default Card;
