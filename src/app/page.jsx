import Image from 'next/image';
import styles from './home.module.css'
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam optio sunt voluptate laborum distinctio totam sed in vitae, velit mollitia iste tempora, quis provident similique. Voluptas nobis quibusdam vel ad?
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>LearnMore</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;