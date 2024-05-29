import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/24415132/pexels-photo-24415132/free-photo-of-people-sitting-at-tables-outside-a-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>28.05.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore illo eligendi modi aspernatur iusto explicabo, iure dolore quod eum possimus repellendus sint velit perspiciatis eaque tempore natus pariatur perferendis praesentium!</p>
        <Link className={styles.link} href="/blog/post">READ MORE </Link>
      </div>
    </div>
  )
}

export default PostCard
