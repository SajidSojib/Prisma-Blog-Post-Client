import { Route } from "@/types/routes.type";

export const userRoutes: Route[] = [
    {
        title: "User Dashboard",
        items: [
            {
                title: "Create Post",
                url: "/user-dashboard/create-post"
            },
            {
                title: "Post History",
                url: "/user-dashboard/history"
            },
            {
                title: "My Orders",
                url: "/user-orders"
            },
            {
                title: "My Profile",
                url: "/user-profile"
            },
            {
                title: "Home",
                url: "/"
            }
        ]
    }
]