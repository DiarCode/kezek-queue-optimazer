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

interface NavbarContext {
  mobileMenu: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
  notificationMenu: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };
}

export const NavbarContext = createContext<NavbarContext>({} as NavbarContext);

export const NavbarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);

  const closeAllModals = () => {
    setMobileMenuOpen(false);
    setNotificationMenuOpen(false);
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

  const value: NavbarContext = useMemo(() => {
    return {
      mobileMenu: {
        open: mobileMenuOpen,
        setOpen: setMobileMenuOpenWrapper,
      },
      notificationMenu: {
        open: notificationMenuOpen,
        setOpen: setNotificationMenuOpenWrapper,
      },
    };
  }, [
    mobileMenuOpen,
    notificationMenuOpen,
    setMobileMenuOpenWrapper,
    setNotificationMenuOpenWrapper,
  ]);

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
