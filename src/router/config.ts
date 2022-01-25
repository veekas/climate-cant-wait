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
    path: ["/"],
    exact: false,
    component: "Home",
  },
];

export default routes;
