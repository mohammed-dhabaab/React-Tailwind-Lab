import styles from "../styles"

function HeroSlider() {
    return (
        <div className="relative md:col-span-2">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❮</a>
                        <a href="#slide1" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❯</a>
                    </div>
                </div>
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❮</a>
                        <a href="#slide1" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❮</a>
                        <a href="#slide1" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❮</a>
                        <a href="#slide1" className="btn bg-gray-200 text-gray-500 border-0 rounded-sm">❯</a>
                    </div>
                </div> */}
            </div>

            <div className="absolute bottom-5 transform -translate-x-1/2  left-1/2 flex gap-3">
                <div className="bg-black p-1 rounded"></div>
                <div className="bg-gray-300 p-1 rounded"></div>
                <div className="bg-gray-300 p-1 rounded"></div>
            </div>
        </div>
    )
}

export default HeroSlider