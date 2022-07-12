const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "", component: () => import("pages/Home.vue") },
      {
        path: "ttest1",
        name: "ttest1",
        component: () => import("pages/ttest1.vue"),
      },
      {
        path: "QnA",
        name: "QnA",
        component: () => import("pages/QnAService.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/TermsLayout"),
    children: [
      {
        path: "info",
        name: "info",
        component: () => import("pages/gunbam_terms/Information"),
      },
      {
        path: "operation",
        name: "operation",
        component: () => import("pages/gunbam_terms/Operation"),
      },
      {
        path: "tos",
        name: "tos",
        component: () => import("pages/gunbam_terms/gunbam_TOS"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/system/Error404.vue"),
  },
];

export default routes;
