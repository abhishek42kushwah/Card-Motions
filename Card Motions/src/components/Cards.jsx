//  import React from 'react'
import { FiFileText } from "react-icons/fi";
import { MdDownloadForOffline, MdScale } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Cards({data,refrence}) {

  return (
<motion.div drag dragConstraints={refrence}   animate={{ x: [null, 100, 0] }} whileDrag={{scale:1}} dragTransition={{bounceDamping:10 ,bounceStiffness:400}} className="relative w-[180px] h-[225px] rounded-[20px] bg-zinc-900/90  mx-4  p-5 text-white ">
<div className="cursor-pointer text-[20px] " >
<FiFileText />
</div>
<p className="text-sm pt-4 font-semibold leading-tight"  >{data.desc}</p>
<div className="absolute bottom-0 rounded-[20px] w-full left-0 ">
<div className="flex items-center py-3 justify-between mx-5 ">
  <h2>{data.fileSize}</h2>
  <div className="cursor-pointer">
  <span>
    {data.close ? (<MdDownloadForOffline size={23} />) : ( <IoMdCloseCircle size={23} />
)} 
  </span>
  
  </div>
</div>
{data.tag.isOpen ? (<div className={`flex justify-center text-[17px] text-semibold items-center cursor-pointer  ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} rounded-b-3xl pt-3 pb-3 `}   >
  <h3 className="font-semibold">
  {data.tag.tagTitle}
  </h3>
</div>): null }

</div>
</motion.div>

  ) 
}

export default Cards
