'use client'
import React, { ReactNode, useState } from "react"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"

const Carousel = ({ children: slides } : { children: ReactNode }) => {
    const slideArray = React.Children.toArray(slides);
    const [curr, setCurr] = useState(0)
    
    const prev = () => setCurr(curr => curr === 0 ? slideArray.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === slideArray.length - 1 ? 0 : curr + 1)

    return <div className="flex justify-center">
        <div className="overflow-hidden relative max-w-300">
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}
            </div>
            <button
                className="absolute z-1 bg-black/30 p-5 rounded-full left-7 top-[50%] cursor-pointer hover:bg-black/50 hover:-translate-x-2 duration-200"
                onClick={prev}
            >
                <MdOutlineArrowBackIosNew/>
            </button>
            <button
                className="absolute z-1 bg-black/30 p-5 rounded-full right-7 top-[50%] cursor-pointer hover:bg-black/50 hover:translate-x-2 duration-200"
                onClick={next}
            >
                <MdOutlineArrowForwardIos/>
            </button>
        </div>
    </div>
}

export default Carousel