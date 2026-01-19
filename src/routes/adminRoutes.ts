import { Route } from "@/types/routes.type";

export const adminRoutes: Route[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Overview",
        url: "/overview",
      },
      {
        title: "Analytics",
        url: "/analytics",
      },
      {
        title: "Create Blog",
        url: "/create-blog",
      },
    ],
  },
];
