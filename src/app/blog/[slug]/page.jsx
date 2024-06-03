import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/24415132/pexels-photo-24415132/free-photo-of-people-sitting-at-tables-outside-a-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Blog Image" 
            fill 
            className={styles.img}/>
      </div>
      <div className={styles.textcontainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image 
              src="https://images.pexels.com/photos/24415132/pexels-photo-24415132/free-photo-of-people-sitting-at-tables-outside-a-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Author Image" 
              width={50}
              height={50}
              className={styles.avatar}/>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Irene</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>29.05.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reiciendis harum, quas corrupti vel voluptas, ipsa, deleniti sint culpa numquam amet beatae quos eaque explicabo vero ipsum facilis minima provident!
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage
