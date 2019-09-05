import PageCatalog from "@/views/PageCatalog/PageIndex";

export default [
  {
    path: "/",
    title: "Catalog",
    icon: "catalog",
    alias: "/catalog",
    name: "PageCatalog",
    meta: { layout: "has-auth" },
    component: PageCatalog
  }
];
