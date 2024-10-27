import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { normalizeValue } from "@/lib/progressbar-utils";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

const ProgressVertical = React.forwardRef(
  ({ className, value = 50, min = 0, max = 100, ...props }, ref) => {
    const progressValue = normalizeValue(min, max, value);
    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-full w-2 overflow-hidden rounded-full bg-primary/20",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateY(${100 - (progressValue || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

ProgressVertical.displayName = ProgressPrimitive.Root.displayName;
export { Progress, ProgressVertical };
