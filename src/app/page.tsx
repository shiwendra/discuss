import CreateTopicForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topi-list";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2 ">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-2 px-2">
        <CreateTopicForm />
        <Divider className="my-2" />

        <TopicList />
      </div>
    </div>
  );
}
