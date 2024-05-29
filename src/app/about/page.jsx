import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital idead that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>
        We create digital idead that are bigger, bolder, braver and better
        We believe in good idead flexibility and precission We're worlds Our Special
        Team best consulting & financial solution provider. Wide range of web and Software Development Services
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>5+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>200 K+</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1>2 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img}/>
      </div>
    </div>
  )
}

export default AboutPage
