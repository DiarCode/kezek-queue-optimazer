// type PagesLinksType = { [key: string]: IPagesValue };

// interface IPagesValue {
//   name: string;
//   link: string;
// }

export const PAGES_LINKS = {
  Home: { name: "Home", link: "/" },
  Profile: { name: "Profile", link: "/profile" },
  Events: {
    name: "Events",
    link: "/events",
    sub_links: {
      EventExcerpt: {
        name: "Event Excerpt",
        link: (id: string) => `/events/${id}}`,
      },
      EventDashboard: {
        name: "Event Dashboard",
        link: (id: string) => `/events/${id}/dashboard`,
      },
    },
  },
  Login: { name: "Login", link: "/login" },
  Signup: { name: "Signup", link: "/signup" },
  Search: { name: "Search", link: "/search" },
  Queues: {
    name: "Queues",
    link: "/queues",
    sub_links: { QueueExcerpt: (id: string) => `/queues/${id}` },
  },
};

export const DESKTOP_NAVBAR_LINKS = {
  Home: PAGES_LINKS.Home,
  Events: PAGES_LINKS.Events,
  Search: PAGES_LINKS.Search,
};

export const MOBILE_NAVBAR_LINKS = {
  Home: PAGES_LINKS.Home,
  Events: PAGES_LINKS.Events,
  Search: PAGES_LINKS.Search,
};

export const PROFILE_NAVBAR_LINKS = {
  Profile: PAGES_LINKS.Profile,
  Queues: PAGES_LINKS.Queues,
};
