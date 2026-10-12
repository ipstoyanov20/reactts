import { useEffect, useState, type ReactNode } from "react";
import { get } from "./utils/http";
import type { BlogPost } from "./components/BlogPosts";
import fetchingImage from './assets/data-fetching.png'
import BlogPosts from "./components/BlogPosts";

type RawDataBlogPosts = {
  id: number
  userId: number
  title: string
  body: string

}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()

  useEffect(() => {
    async function fetchedPosts() {

      const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPosts[]
      const blogPosts: BlogPost[] = data.map(rawPost => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body
        }
      })
      setFetchedPosts(blogPosts)
    }

    fetchedPosts()
  }, [])

  let content: ReactNode

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />

  }
  return <main>
    <img src={fetchingImage} alt="Image" />
    {content}
  </main>;
}

export default App;
