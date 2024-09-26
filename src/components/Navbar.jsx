import styles from "../styles"
import { useState } from "react"

function Navbar() {
    const [nav, setNav] = useState(false)
    const displayMobileNav = () => {
        setNav(!nav)
    }
    return (

        <header className={`${styles.outerWrapper} py-3 bg-yellow-500`}>
            <div className={`${styles.wrapper} flex justify-between`}>
                <div className="">
                    <a className="text-xl">ALL CATEGORIES</a>
                </div>
                <ul className="hidden md:flex gap-4 justify-between">
                    <li><a>TODAY DEALS</a></li>
                    <li><a>ELECTRONICS</a></li>
                    <li><a>CLOTHINGS</a></li>
                    <li><a>COMPUTERS</a></li>
                    <li><a>FURNITURE</a></li>
                    <li><a>MOM & BABY</a></li>
                    <li><a>BOOK & MORE</a></li>
                </ul>

                <div onClick={() => displayMobileNav()} className="md:hidden p-1 cursor-pointer flex flex-col  gap-1  w-8 h-8">
                    <div className="p-[2px] bg-black rounded"></div>
                    <div className="p-[2px] bg-black rounded"></div>
                    <div className="p-[2px] bg-black rounded"></div>
                </div>
            </div>
            <ul className={` flex-col gap-4 ${nav ? "flex" : "hidden"}`}>
                <li><a>TODAY DEALS</a></li>
                <li><a>ELECTRONICS</a></li>
                <li><a>CLOTHINGS</a></li>
                <li><a>COMPUTERS</a></li>
                <li><a>FURNITURE</a></li>
                <li><a>MOM & BABY</a></li>
                <li><a>BOOK & MORE</a></li>
            </ul>
        </header>
    )
}

export default Navbar