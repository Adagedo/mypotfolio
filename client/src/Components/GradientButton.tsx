import { motion } from "framer-motion";

function GradientButton({
  text,
  className,
  href,
}: {
  text: string;
  className?: string;
  href?: string;
}) {
  return (
    <motion.a
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      href={href}
      className={`bg-gradient-to-r from-[#194BFD] to-[#AD13FB] text-[0.85rem] rounded-full py-2 px-4 ${className}`}
    >
      {text}
    </motion.a>
  );
}

export default GradientButton;
