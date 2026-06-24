import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "form-field flex min-h-[80px] w-full rounded-md border border-[#d8d2c8] bg-[#f5f1eb] px-3 py-2 typo-body ring-offset-[#f5f1eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8d2c8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

