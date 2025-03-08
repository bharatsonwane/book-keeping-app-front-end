const Menu = [
  {
    key: "routekey-home",
    label: "sidebar.dashboard",
    path: "/app/home",
    icon: <i className="me-1 bi bi-house-fill"></i>,
    vissbleOnSmallScrren: true,
  },
  {
    key: "routekey-services",
    label: "sidebar.services",
    path: "/app/services",
    icon: <i className="me-1 bi bi-briefcase-fill"></i>,
    subMenu: [
      {
        key: "routekey-services-tm",
        label: "Migrations",
        path: "/app/services/technologymigrations",
        icon: <i className="me-1 bi bi-briefcase-fill"></i>,
        vissbleOnSmallScrren: true,
      },
      {
        key: "routekey-services-cp",
        label: "Cross Platform Apps",
        path: "/app/services/crossplatform",
        icon: <i className="me-1 bi bi-briefcase-fill"></i>,
        vissbleOnSmallScrren: true,
      },
      {
        key: "routekey-services-pwa",
        label: "PWA",
        path: "/app/services/pwa",
        icon: <i className="me-1 bi bi-briefcase-fill"></i>,
        vissbleOnSmallScrren: true,
      },
    ],

    vissbleOnSmallScrren: true,
  },
  {
    key: "routekey-work",
    label: "sidebar.work",
    path: "/app/work",
    icon: <i className="me-1 bi bi-pc-display"></i>,
    vissbleOnSmallScrren: true,
  },
  {
    key: "routekey-team",
    label: "sidebar.team",
    path: "/app/team",
    icon: <i className="me-1 bi bi-people-fill"></i>,
    vissbleOnSmallScrren: true,
  },
  {
    key: "routekey-schema",
    label: "sidebar.schema",
    path: "/app/schema",
    icon: <i className="me-1 bi bi-people-fill"></i>,
    vissbleOnSmallScrren: true,
  },
];

export default Menu;
