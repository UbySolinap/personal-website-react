import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#FFFFFF",
            color: "#000000",
          },
        }}
      />
    </AnimatePresence>
  );
}

export default AppLayout;
