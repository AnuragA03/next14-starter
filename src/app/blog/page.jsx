import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"

// Fetch Data with an API
  // const getData = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // if(!res.ok){
  //   throw new Error("something went wrong")
  // }

  // return res.json();
  // }

const BlogPage = async () => {

  // const posts = await getData();

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
      

    </div>
  )
}

export default BlogPage