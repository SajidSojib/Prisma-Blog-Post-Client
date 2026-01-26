import { env } from "@/env";

interface Params {
  isFeatured?: boolean;
  search?: string;
}
interface ServiceOptions {
  cache?: RequestCache,
  revalidate?: number
}

const API_URL = env.API_URL;

export const blogService = {
  getAllBlogPosts: async function (params?: Params, options?: ServiceOptions) {
    try {
      const url = new URL(`${API_URL}/posts`);

      if(params){
        Object.entries(params).forEach(([key, value]) => {
          if(value){
            url.searchParams.append(key, value);
          }
        })
      }

      const config: RequestInit = {}
      if(options?.cache){
        config.cache = options.cache;
      }
      if(options?.revalidate){
        config.next = { revalidate: options.revalidate };
      }

      const res = await fetch(url.toString(), config);

      // const res = await fetch(`${API_URL}/posts`, {
      //   // cache: "default",       // static (force cache)
      //   // cache: "no-store",        // dynamic
      //   next: { revalidate: 5 },      // ISR (static + dynamic)
      // });


      const data = await res.json();

    //   if (data.success) {
    //     return { success: true, data: data.data, error: null };
    //   }else {
    //     return { success: false, data: null, error: data.error };
    //   }
    return { success: true, data: data.data, error: null };
    } catch (error) {
      return { success: false, data: null, error: error };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();
      return { success: true, data, error: null };

    } catch (error) {
      return { success: false, data: null, error: error };
    }
  },
};
