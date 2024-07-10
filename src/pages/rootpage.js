import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Rootpage = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.includes("/checkout") && <Header />}

      <main className="bg-[#F7F7F7] px-6">
        {children}

        <div className="container w-[100%] max-w-[90%] mx-auto ">
          <Outlet />
        </div>
      </main>
      {!location.pathname.includes("/checkout") && <Footer />}
    </div>
  );
};

export default Rootpage;
