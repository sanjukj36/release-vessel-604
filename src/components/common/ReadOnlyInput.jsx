import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

ReadOnlyInput.propTypes = {};

const inputVariants = cva(
  "ml-auto min-w-[5em] max-w-min px-2 focus:outline-none font-semibold rounded-xl text-center",
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
  return <p className={cn(inputVariants({ variant, className }))}>{value}</p>;
}
