import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {

  const ref = useRef(null);
 
  const data = [
    {
      title: "Coding is about to cultivate the Mind portions",
      fileSize: "9Mb",
      closeBtn: true,
      progressDetail: {
        tagIsOpen: true,
        tagColor: "#6366f1",
        tagTitle: "Download Now"
      }
    },
    {
      title: "The more you immerse in the game of coding and let it as a champion..",
      fileSize: "12Mb",
      closeBtn: false,
      progressDetail: {
        tagIsOpen: true,
        tagColor: "#22c55e",
        tagTitle: "Update Now"
      }
    },

    {
      title: "The more you immerse in the game of coding and let it as a champion..",
      fileSize: "12Mb",
      closeBtn: false,
      progressDetail: {
        tagIsOpen: true,
        tagColor: " #ec4876",
        tagTitle: "Get Started"
      }
    },
    {
      title: "The more you immerse in the game of coding and let it as a champion..",
      fileSize: "12Mb",
      closeBtn: true,
      progressDetail: {
        tagIsOpen: true,
        tagColor: "#000",
        
        tagTitle: "Our Insights"
      }
    },
    {
      title: "Coding is about to cultivate the Mind portions",
      fileSize: "9Mb",
      closeBtn: true,
      progressDetail: {
        tagIsOpen: true,
        tagColor: "#ef4444",
        tagTitle: "Learn More!..."
      }
    }
  ];

  return (
    <div ref={ref} className='h-full w-full fixed z-[10] p-4 flex items-start gap-8'>
      {data.map((item, index) => (
        // Adding a key prop using the index or a unique identifier
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
