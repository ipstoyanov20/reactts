import { useEffect, useState, type ReactNode } from "react";
import { get } from "./utils/http";
import type { BlogPost } from "./components/BlogPosts";
import fetchingImage from './assets/data-fetching.png'
import BlogPosts from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPosts = {
  id: number
  userId: number
  title: string
  body: string

}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()

  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    async function fetchedPosts() {
      setIsFetching(true)
      try {

        const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPosts[]

        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        })
        setFetchedPosts(blogPosts)
      } catch (error) {

        setError((error as Error).message)
      }
      setIsFetching(false)
    }
    fetchedPosts()
  }, [])

  let content: ReactNode

  if(error){
    content = <ErrorMessage text={error}/>
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />

  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>
  }
  return <main>
    <img src={fetchingImage} alt="Image" />
    {content}
  </main>;
}

export default App;
