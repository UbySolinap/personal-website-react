import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="mx-10 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-32 2xl:mx-72 3xl:mx-96">
      <Header />
      <main className="lg:mx-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
