import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

BoxCard.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

const boxCardStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: [
        "rounded-xs",
        "overflow-hidden",
        "p-4",
        "bg-gradient-to-b from-input to-background",
        "shadow-[1px_1px_2px_0px_rgba(0,0,0,0.2),1px_1px_0px_0px_rgba(255,255,255,0.9)_inset]"
      ],
      secondary: ["bg-accent/50", "p-4", "border-2 border-primary rounded-md"]
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export function BoxCard({ variant, className, children }) {
  return (
    <div className={twMerge(boxCardStyles({ variant }), className)}>
      {children}
    </div>
  );
}
