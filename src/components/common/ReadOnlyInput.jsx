import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

ReadOnlyInput.propTypes = {};

const inputVariants = cva(
  "ml-auto max-w-[4em] px-2 focus:outline-none font-semibold rounded-xl text-center",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-secondary to-input text-accent-foreground",
        danger:
          "bg-gradient-to-b from-destructive/80 to-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export function ReadOnlyInput({ value, className, variant }) {
  return (
    <input
      type="text"
      value={value}
      readOnly
      className={cn(inputVariants({ variant, className }))}
    />
  );
}
