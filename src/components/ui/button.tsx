import { ButtonHTMLAttributes, forwardRef } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  `inline-flex items-center justify-center text-lg font-medium transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 
   focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed  
   disabled:opacity-50 disabled:active:scale-100 gap-1`,
  {
    variants: {
      colors: {
        primary:
          "bg-gray-500 border-gray-500 hover:bg-gray-400 hover:border-gray-400",
        secondary:
          "bg-blue-400 hover:bg-blue-500 border-blue-400 hover:border-blue-500",
        muted:
          "bg-slate-200 border-slate-200 hover:bg-slate-300 hover:border-slate-300",
        warning:
          "bg-amber-200 border-amber-200 hover:bg-amber-300 hover:border-amber-300",
        info: "bg-sky-200 border-sky-200 hover:bg-sky-300 hover:border-sky-300",
        success:
          "bg-emerald-200 border-emerald-200 hover:bg-emerald-300 hover:border-emerald-300",
      },
      variant: {
        solid: "border text-white",
        outline: "bg-transparent border hover:bg-transparent",
        transparent: "bg-transparent",
      },
      size: {
        xs: "p-1",
        sm: "py-1 px-2",
        md: "py-2 px-4",
        lg: "py-2 px-7",
        xl: "py-3 px-9",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      animation: {
        pulse: "animate-pulse",
        bounce: "animate-bounce active:scale-100",
      },
      isLoading: {
        true: "disabled:cursor-progress",
      },
      loaderPosition: {
        start: "disabled:cursor-progress",
        end: "disabled:cursor-progress",
      },
    },
    defaultVariants: {
      colors: "primary",
      variant: "solid",
      radius: "md",
      size: "md",
      animation: null,
      isLoading: false,
      loaderPosition: null,
    },
  }
);

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      size,
      variant,
      radius,
      animation,
      isLoading,
      loaderPosition,
      colors,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            colors,
            variant,
            size,
            animation,
            radius,
            className,
            isLoading,
            loaderPosition,
          })
        )}
        {...props}
      >
        {isLoading && loaderPosition === "start" && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        {isLoading && !loaderPosition ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          children
        )}
        {isLoading && loaderPosition === "end" && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
