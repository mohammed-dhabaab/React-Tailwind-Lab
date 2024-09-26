import React from 'react'
import styles from '../styles'

function FooterImage() {
    return (
        <section className={styles.outerWrapper}>
            <div className={`${styles.wrapper} bg-slate-50 border border-solid border-gray-300 p-3 flex flex-col gap-4 justify-between align-middle md:flex-row`}>
                <div className='flex flex-col align-middle justify-center'>
                    <h3 className='text-3xl'>Headphone</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='flex flex-col align-middle justify-center'>
                    <p className='text-gray-400 line-through'>$260.50</p>
                    <p className='text-green-500 text-xl'>$219.05</p>

                    <button className='py-2 px-4 rounded-sm bg-orange-400 font-bold w-fit'>Shop Now</button>
                </div>

                <div className='w-full md:max-w-[400px] flex items-center justify-center '>
                    <img className='max-w-full max-h-full object-contain rounded-sm' src="https://cdn.pixabay.com/photo/2017/08/29/18/43/music-2694489_1280.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default FooterImage