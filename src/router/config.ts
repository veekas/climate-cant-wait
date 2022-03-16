const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/bills"],
    exact: true,
    component: "Bills",
  },
  {
    path: ["/take-action"],
    exact: true,
    component: "TakeAction",
  },
  {
    path: ["/email"],
    exact: true,
    component: "EmailUpdates",
  },
  {
    path: ["/"],
    exact: false,
    component: "Home",
  },
];

export default routes;
