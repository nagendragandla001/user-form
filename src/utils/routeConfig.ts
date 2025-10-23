export const ROUTES = [
  {
    path: "/",
    component: () => import("../components/Home"),
  },
  {
    path: "/user-registration",
    component: () => import("../components/User"),
  },
  {
    path: "/products",
    component: () => import("../components/ProductsLayout"),
    children: [
      {
        index: true,
        component: () => import("../components/Products"),
      },
      {
        path: ":id",
        component: () => import("../components/ProductDetails"),
      },
      {
        path: ":id/reviews",
        component: () => import("../components/ProductReviews"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("../components/NotFound"),
  },
];
