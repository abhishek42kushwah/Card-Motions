// import React from 'react'

// import { FiDownload } from "react-icons/fi"
import { useRef } from "react"
import Cards from "./Cards"

function FrontScreen() {


  const ref = useRef(null)
  const data =[
    {
      desc: "This is a description of the first card.",
      fileSize: ".9MB",
      close: false,
      tag : {isOpen: false,tagTitle:"Upload Now.." ,tagColor:"blue" }
    },
    {
      desc: "This is a description of the second card.",
      fileSize: ".1MB",
      close: true,
      tag : {isOpen: true,tagTitle:"Upload Now.." ,tagColor:"blue" }
    },
    {
      desc: "This is a description of the more.. card.",
      fileSize: ".5MB",
      close: true,
      tag : {isOpen: false,tagTitle:"Download Now.." ,tagColor:"green" }
    },
    {
      desc: "This is a description of the first card.",
      fileSize: "10MB",
      close: true,
      tag : {isOpen: true,tagTitle:"Download Now.." ,tagColor:"green" }
    },
    {
      desc: "This is a description of the first card.",
      fileSize: "95MB",
      close: false,
      tag : {isOpen: true,tagTitle:"Server Error" ,tagColor:"green" }
    }
  ]

//   How do you write a 150 word article?
// For a 150 words essay, you need at 


  return (
    <div  ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full pt-4 gap-5 flex-wrap flex  ">
    {data.map((items,index)=>(
      <Cards data={items} key={index} refrence={ref} />
    ))}
</div>
  )
}

export default FrontScreen
