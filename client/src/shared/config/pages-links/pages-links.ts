export const PAGES_LINKS = {
  Home: { name: "Home", link: "/" },
  Profile: {
    name: "Profile",
    link: "/profile",
    sub_links: {
      MyEvents: {
        name: "My Events",
        link: "/profile/events",
        sub_links: {
          MyEventExcerpt: {
            name: "My Event Excerpt",
            link: (id: string) => `/profile/events/${id}`,
          },
        },
      },
      MyQueues: {
        name: "My Queues",
        link: "/profile/queues",
        sub_links: {
          MyQueuesExcerpt: {
            name: "My Queues Excerpt",
            link: (id: string) => `/profile/queues/${id}`,
          },
        },
      },
    },
  },
  Events: {
    name: "Events",
    link: "/events",
    sub_links: {
      EventExcerpt: {
        name: "Event Excerpt",
        link: (id: string) => `/events/${id}`,
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
  MyEvents: PAGES_LINKS.Profile.sub_links.MyEvents,
  MyQueues: PAGES_LINKS.Profile.sub_links.MyQueues,
};
