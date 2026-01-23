import { cookies } from "next/headers";

export const userService = {
    getSession : async function () {
        try {
          // const session = await authClient.getSession();   // always return null in server component

          const cookieStore = await cookies();
          const res = await fetch(
            "http://localhost:8000/api/auth/get-session",
            {
              headers: {
                cookie: cookieStore.toString(),
              },
              cache: "no-store",
            }
          );
          const session = await res.json();

          if(!session) {
            return {data: null, error: {message: "Session not found"}}
          }
          return {data: session, error: null}
        } catch (error) {
            console.log(error);
            return {data: null, error: {message: "Something went wrong"}}
        }
    }
}