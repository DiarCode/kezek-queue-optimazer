import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface NavbarContext {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;

  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContext>({} as NavbarContext);
export const useNavbar = () => useContext(NavbarContext);

export const NavbarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const value: NavbarContext = useMemo(() => {
    return {
      visible,
      setVisible,
      mobileMenuOpen,
      setMobileMenuOpen,
    };
  }, [mobileMenuOpen, visible]);

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
