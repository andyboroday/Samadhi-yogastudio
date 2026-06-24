import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 typo-caption transition-colors focus:outline-none focus:ring-2 focus:ring-[#d8d2c8] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#657b78] hover:bg-[#657b78]/80",
        secondary: "border-transparent bg-[#f5f1eb] hover:bg-[#f5f1eb]/80",
        destructive: "border-transparent bg-[#657b78] hover:bg-[#657b78]/80",
        outline: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
