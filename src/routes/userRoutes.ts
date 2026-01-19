import { Route } from "@/types/routes.type";

export const userRoutes: Route[] = [
    {
        title: "User Dashboard",
        items: [
            {
                title: "My Orders",
                url: "/user-orders"
            },
            {
                title: "My Profile",
                url: "/user-profile"
            }
        ]
    }
]