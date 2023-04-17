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
    sub_links: { Event: (id: string) => `/events/${id}` },
  },
  Login: { name: "Login", link: "/login" },
  Signup: { name: "Signup", link: "/signup" },
  Partners: { name: "Partners", link: "/partners" },
};

export const DESKTOP_NAVBAR_LINKS = {
  Home: PAGES_LINKS.Home,
  Events: PAGES_LINKS.Events,
  Partners: PAGES_LINKS.Partners,
};

export const MOBILE_NAVBAR_LINKS = {
  Home: PAGES_LINKS.Home,
  Events: PAGES_LINKS.Events,
  Partners: PAGES_LINKS.Partners,
};
