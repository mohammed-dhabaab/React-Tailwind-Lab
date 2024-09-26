import styles from "../styles"
import Card from "./Card"

function Categories() {
    return (
        <section className={styles.outerWrapper}>
            <div className={styles.wrapper}>
                <h2 className="text-gray-500 pb-4 mb-5 text-xl font-semibold border-b-2 border-b-solid border-b-gray-300">Top Categories Of The Month</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <Card title="Electronics" list={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]} imageSrc="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Card title="Electronics" list={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]} imageSrc="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Card title="Electronics" list={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]} imageSrc="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Card title="Electronics" list={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]} imageSrc="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Card title="Electronics" list={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]} imageSrc="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Card title="Electronics" list={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]} imageSrc="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    {/* <Card title="Electronics" list={["Womens", "Mens", "Bags & Backpacks", "Accessories"]} imageSrc="https://aribadirect.com/img/categories/shop/1.jpg" />
                    <Card title="Electronics" list={["Womens", "Mens", "Bags & Backpacks", "Accessories"]} imageSrc="" />
                    <Card title="Electronics" list={["Womens", "Mens", "Bags & Backpacks", "Accessories"]} imageSrc="" />
                    <Card title="Electronics" list={["Womens", "Mens", "Bags & Backpacks", "Accessories"]} imageSrc="" /> */}
                </div>
            </div>
        </section>
    )
}

export default Categories