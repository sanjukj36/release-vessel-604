import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import "./box-card.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

BoxCard.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const boxCardStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: [
        "rounded-xs relative",
        "overflow-hidden",
        "p-4",
        "bg-gradient-to-b from-input to-background",
        "shadow-[1px_1px_2px_0px_rgba(0,0,0,0.2),1px_1px_0px_0px_rgba(255,255,255,0.9)_inset]"
      ],
      secondary: ["bg-accent/50", "p-4", "border-2 border-primary rounded-md"],
      none: ["relative"]
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export function BoxCard({
  variant,
  className,
  children,
  loading = false,
  key
}) {
  return (
    <motion.div
      key={key}
      animate={{
        scale: [0.89, 1]
      }}
      className={twMerge(boxCardStyles({ variant }), className)}
    >
      {children}
      {loading && (
        <div className="absolute top-0 left-0 right-0 rounded-sm ">
          <div className="box-card__loader-line" />
        </div>
      )}
    </motion.div>
  );
}
