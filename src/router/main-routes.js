import PageCatalog from "@/pages/PageCatalog";

export default [
  {
    path: "/",
    title: "Catalog",
    icon: "catalog",
    alias: "/catalog",
    name: "PageCatalog",
    meta: { layout: "has-auth" },
    component: PageCatalog,
    // meta: {
    //   middlewares: [RequiresAuth]
    // }
  }
];
