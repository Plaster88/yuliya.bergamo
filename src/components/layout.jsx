import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

import { OutletContainer, LayoutContainer } from '../styles';

export const Layout = () => {

  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  );
};

