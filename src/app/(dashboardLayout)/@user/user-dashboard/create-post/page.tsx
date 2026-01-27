import BlogFormClient from "@/components/modules/user/create-post/createBlogFromClient";
import BlogFormServer from "@/components/modules/user/create-post/createBlogFromServer";


export default function CreatePost() {
  
  return (
    <div>
        {/* <BlogFormServer /> */}
        <BlogFormClient />
    </div>
  );
}
