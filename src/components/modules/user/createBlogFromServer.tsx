import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogService } from "@/services/blog.service";
import { revalidateTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function BlogFormServer() {
  const createBlog = async (data: FormData) => {
    "use server";

    const title = data.get("title") as string;
    const content = data.get("content") as string;
    const tags = data.get("tags") as string;

    const blogData = {
      title,
      content,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    };

    const res = await blogService.createBlog(blogData);
    console.log(res);

    if(res.success){
    //   return redirect('/user-dashboard/create-post?success')
        revalidateTag('blogPosts', 'max');
        // updateTag("blogPosts");
    }
  };
  return (
    <div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>Write your blog</CardDescription>
        </CardHeader>

        <CardContent>
          <form action={createBlog} id="blog-form">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter your blog title"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="content">Content</FieldLabel>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Enter your blog content"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="tags">Tags</FieldLabel>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="Enter your blog tags (comma separated)"
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Button type="submit" form="blog-form" className="w-full">
            Create Blog
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
