"use server"

import { blogService } from "@/services/blog.service"
import { updateTag } from "next/cache";

export const getAllBlogPosts = async() => {
    return blogService.getAllBlogPosts();
}

export const createBlog = async (data: {title: string, content: string, tags: string[]}) => {
  const res = await blogService.createBlog(data);
  updateTag("blogPosts");
  return res;
}