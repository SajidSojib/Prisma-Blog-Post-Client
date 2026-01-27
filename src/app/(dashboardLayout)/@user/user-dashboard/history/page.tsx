import React from 'react'
import HistoryTable from '@/components/modules/user/history/HistoryTable'
import { blogService } from '@/services/blog.service'

export default async function HistoryPage() {
    const res = await blogService.getAllBlogPosts()
    const posts = res.data;
  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>Blog Post History</h1>
        <HistoryTable blogs={posts}/>
    </div>
  )
}
