import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "linear" }}
        className="mx-5 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-32 2xl:mx-72 3xl:mx-96"
      >
        <Header />
        <main className="lg:mx-16">
          <Outlet />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default AppLayout;
