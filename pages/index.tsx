import Header from "@/components/Header";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <>
      <Header label = "Bread Oven" />
      <Form placeholder= "What's baking?" />
      <PostFeed />
    </>
  )
}
