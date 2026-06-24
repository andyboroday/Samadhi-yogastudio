import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "form-field flex h-10 w-full rounded-md border border-[#d8d2c8] bg-[#f5f1eb] px-3 py-2 typo-body ring-offset-[#f5f1eb] file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8d2c8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
