import PropTypes from "prop-types";
import { motion } from "framer-motion";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({ children, onClick, type }) {
  const styles = {
    primary:
      "text-lg font-bold italic hover:font-semibold hover:text-profile hover:underline animate-bounce hover:animate-none",
    submit:
      "cursor-pointer rounded-xl border-2 border-profile bg-profile px-2 py-1 font-semibold text-slate-50 transition-all hover:scale-105 hover:bg-slate-50 hover:text-profile sm:px-4 sm:py-2",
    return:
      "cursor-pointer rounded-xl border-2 border-profile bg-profile px-1 sm:px-2 sm:py-1 font-semibold text-slate-50 transition-all hover:scale-105 hover:bg-slate-50 hover:text-profile",
  };

  if (type === "primary")
    return (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3.5, ease: "anticipate" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={styles[type]}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={styles[type]}
    >
      {children}
    </motion.button>
  );
}

export default Button;
