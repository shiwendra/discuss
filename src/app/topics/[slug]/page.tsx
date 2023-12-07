import CreatePostForm from "@/components/posts/post-create-form";
import { Divider } from "@nextui-org/react";
interface TopicsShowPageProps {
  params: {
    slug: string;
  };
}
export default function TopicsShowPage({ params }: TopicsShowPageProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2 ">{slug}</h1>
      </div>
      <div>
        <CreatePostForm slug={slug} />
      </div>
    </div>
  );
}
