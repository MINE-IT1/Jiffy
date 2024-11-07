import React from 'react'
import Range from '../assets/rangeSlider.svg'
import { NavLink } from 'react-router-dom';
import PlanCard from './PlanCard';
import RangeSlider from './RangeSlider'


const ValueSection = () => {
    return (
        <>
            <div className={`mt-12`}>
                <div className={`flex flex-col flex-wrap items-center w-[100%] `}>
                    <h1 className={`capitalize text-4xl bg-heading-gradient bg-clip-text text-transparent font-bold mb-2`}>Unbeatable Value</h1>
                    <p className={`text-center text-[#37474F] text-xl font-medium tracking-wide w-[29%]`}>Full-featured chat platform at industry-leading prices. True usage-based pricing with no hidden fees or surprise overages.</p>
                </div>
                <div className='flex items-center justify-evenly mt-20 ml-8 '>
                    <div id='buttons' className={`bg-quote-gradient flex gap-4 items-center w-[19%] justify-between rounded-lg`}>
                        <NavLink to={`/`} className={`no-underline text-white text-xl capitalize  ml-8`}>
                            Pay monthly
                        </NavLink>
                        <NavLink to={`/`} className={`no-underline text-white text-xl capitalize p-2 m-2  border bg-blue-800 rounded `}> Pay Yearly</NavLink>
                    </div>
                    <div className='mt-[-5rem]'>
                       <RangeSlider />
                    </div>
                </div>
            </div>

            {/** Plan card */}
            <div className='mt-20 mb-4'>
                <PlanCard />
            </div>
        </>
    )
}

export default ValueSection;
