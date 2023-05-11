import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

interface INavbarContext {
  mobileMenu: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
  notificationMenu: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
  profileMenu: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
}

export const NavbarContext = createContext<INavbarContext>(
  {} as INavbarContext
);

export const NavbarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const closeAllModals = () => {
    setMobileMenuOpen(false);
    setNotificationMenuOpen(false);
    setProfileMenuOpen(false);
  };

  const setMobileMenuOpenWrapper = useCallback(
    (state: SetStateAction<boolean>) => {
      closeAllModals();
      setMobileMenuOpen(state);
    },
    []
  );

  const setNotificationMenuOpenWrapper = useCallback(
    (state: SetStateAction<boolean>) => {
      closeAllModals();
      setNotificationMenuOpen(state);
    },
    []
  );

  const setProfileMenuOpenWrapper = useCallback(
    (state: SetStateAction<boolean>) => {
      closeAllModals();
      setProfileMenuOpen(state);
    },
    []
  );

  const value: INavbarContext = useMemo(() => {
    return {
      mobileMenu: {
        open: mobileMenuOpen,
        setOpen: setMobileMenuOpenWrapper,
      },
      notificationMenu: {
        open: notificationMenuOpen,
        setOpen: setNotificationMenuOpenWrapper,
      },
      profileMenu: {
        open: profileMenuOpen,
        setOpen: setProfileMenuOpenWrapper,
      },
    };
  }, [
    mobileMenuOpen,
    notificationMenuOpen,
    profileMenuOpen,
    setMobileMenuOpenWrapper,
    setNotificationMenuOpenWrapper,
    setProfileMenuOpenWrapper,
  ]);

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
