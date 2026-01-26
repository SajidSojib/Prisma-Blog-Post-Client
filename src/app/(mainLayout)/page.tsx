import BlogCard from '@/components/modules/home/BlogCard';
import { blogService } from '@/services/blog.service';
// import { userService } from '@/services/user.service';
import { BlogPost } from '@/types/blog.type';
import React from 'react';

const Home = async() => {
    // const {data: session} = await userService.getSession();
    // console.log("session from home", session);
    const {data: blogs} = await blogService.getAllBlogPosts({search: '2'}, {revalidate: 5});
    return (
        <div>
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-30 w-11/12 mx-auto">
                {blogs?.map((blog: BlogPost) => (
                    <BlogCard key={blog.id} post={blog} />
                ))}
            </div>
        </div>
    );
};

export default Home;