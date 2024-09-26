import React from 'react'

function Card({ title, list, imageSrc }) {
    return (
        <div className='border border-solid border-gray-300 p-3 rounded-sm flex align-middle justify-center flex-col md:flex-row gap-2'>
            <div className='flex items-center justify-center md:max-w-[200px] '>
                <img className='max-w-full max-h-full object-contain rounded-sm' src={imageSrc} alt={title} />
            </div>
            <div >
                <h3 className='mb-2 text-lg font-bold'>{title}</h3>
                <ul>
                    {list.map((item, i) => {
                        return <li key={i} className='text-sm hover:font-semibold cursor-pointer'>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Card