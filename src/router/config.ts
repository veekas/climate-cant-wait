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
    path: ["/calendar"],
    exact: true,
    component: "Calendar",
  },
  {
    path: ["/earth-day"],
    exact: true,
    component: "EarthDay",
  },
  {
    path: ["/toolkit"],
    exact: true,
    component: "Toolkit",
  },
  {
    path: ["/"],
    exact: false,
    component: "Home",
  },
];

export default routes;
