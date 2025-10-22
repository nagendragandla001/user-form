export const ROUTES = [
  {
    path: "/",
    component: () => import("../components/Home"),
  },
  {
    path: "",
    component: () => import("../components/Home"),
  },
  {
    path: "/user-registration",
    component: () => import("../components/User"),
  },
  {
    path: "/products",
    component: () => import("../components/Products"),
  },
  {
    path: "/products/:id",
    component: () => import("../components/ProductDetails"),
  },
  {
    path: "*",
    component: () => import("../components/NotFound"),
  },
];
