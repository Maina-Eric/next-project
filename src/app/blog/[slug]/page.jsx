import Image from 'next/image'
import styles from './singlePost.module.css'

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const post = await getData(slug);
  
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
          <h1 className={styles.title}>{post.title}</h1>
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
           {post.body}
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage
