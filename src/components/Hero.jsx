import styles from "../styles"
import HeroSice from "./HeroSice"
import HeroSlider from "./HeroSlider"

function Hero() {
    return (
        <section className={styles.outerWrapper}>
            <div className={`${styles.wrapper} grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-4`}>
                <HeroSlider />
                <HeroSice />
            </div>
        </section>
    )
}

export default Hero