// "use client"

// import { useParams } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, MessageCircle, Calendar } from "lucide-react";
import { blogService } from "@/services/blog.service";
import Image from "next/image";
import { BlogPost } from "@/types/blog.type";


export const dynamicParams = false

export async function generateStaticParams() {
  const { data: posts } = await blogService.getAllBlogPosts();
  return posts.map((post: BlogPost) => ({
    blogId: post.id,
  })).splice(0,4);
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  // const blogId = params.blogId
  // const {blogId} = useParams();           //! make the page client componet

  const { blogId } = await params;

  const { data: post } = await blogService.getBlogById(blogId);

  return (
    <div className="mt-15 container max-w-4xl mx-auto py-10 px-4">
      <Card>
        {/* Thumbnail */}
        {post?.thumbnail && (
          <Image
            src={post?.thumbnail}
            alt={post?.title}
            className="w-full h-72 object-cover rounded-t-xl"
          />
        )}

        <CardHeader className="space-y-4">
          {/* Title */}
          <CardTitle className="text-3xl font-bold">{post?.title}</CardTitle>

          {/* Meta info */}
          <CardDescription className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Eye size={16} /> {post?.views} views
            </span>

            <span className="flex items-center gap-1">
              <MessageCircle size={16} /> {post?._count.comments} comments
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(post?.createdAt).toLocaleDateString()}
            </span>

            {post?.isFeatured && <Badge>Featured</Badge>}

            <Badge variant="secondary">{post?.status}</Badge>
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-6">
          <p className="leading-7 whitespace-pre-line text-base">
            {post?.content}
          </p>

          {/* Tags */}
          {post?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post?.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="text-xs text-muted-foreground justify-between">
          <span>Created: {new Date(post?.createdAt).toLocaleString()}</span>

          <span>Updated: {new Date(post?.updatedAt).toLocaleString()}</span>
        </CardFooter>
      </Card>
    </div>
  );
}
