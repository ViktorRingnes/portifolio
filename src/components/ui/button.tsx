import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Spinner = () => (
  <svg
    className="h-5 w-5 animate-spin text-current"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 010-16z"
    />
  </svg>
);

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold whitespace-nowrap rounded-sm text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive/60",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/60",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        link: "text-primary text-start justify-start underline-offset-4 hover:underline",
        soft: "bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/10",
        flat: "bg-accent text-accent-foreground hover:bg-accent/80 active:bg-accent/60",
        success:
          "bg-success text-success-foreground hover:bg-success/80 active:bg-success/60",
        info: "bg-info text-info-foreground hover:bg-info/80 active:bg-info/60",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/80 active:bg-warning/60",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        xs: "h-6 px-2 text-xs",
        lg: "h-12 rounded-md px-8",
        icon: "h-8 w-8 flex items-center justify-center p-0 m-0",
      },
      outline: {
        true: "bg-background border",
        false: "",
      },
      ghost: {
        true: "",
        false: "",
      },
      shape: {
        pill: "rounded-full",
        smooth: "rounded-md",
        gentle: "rounded-lg",
        pillow: "rounded-2xl",
        badge: "rounded-3xl",
        sharp: "rounded-none",
      },
      block: {
        true: "w-full justify-center",
        false: "",
      },
    },
    compoundVariants: [
      // outlines
      {
        variant: "default",
        outline: true,
        class:
          "border-primary/80 text-primary bg-primary/10 hover:bg-primary/20 active:bg-primary/10",
      },
      {
        variant: "destructive",
        outline: true,
        class:
          "border-destructive/80 text-destructive hover:bg-destructive/20 active:bg-destructive/10",
      },
      {
        variant: "secondary",
        outline: true,
        class:
          "border-foreground/50 text-foreground/50 hover:bg-foreground/10 active:bg-foreground/5",
      },
      {
        variant: "success",
        outline: true,
        class:
          "border-success/80 text-success hover:bg-success/10 active:bg-success/5",
      },
      {
        variant: "soft",
        outline: true,
        class:
          "border-primary/20 text-primary hover:bg-primary/10 active:bg-primary/5",
      },
      {
        variant: "flat",
        outline: true,
        class:
          "border-accent/80 text-accent-foreground hover:bg-accent/10 active:bg-accent/5",
      },
      {
        variant: "info",
        outline: true,
        class: "border-info text-info hover:bg-info/10 active:bg-info/5",
      },
      {
        variant: "warning",
        outline: true,
        class:
          "border-warning text-warning hover:bg-warning/10 active:bg-warning/5",
      },

      // ghost
      {
        variant: "default",
        ghost: true,
        class:
          "border-primary/80 text-primary bg-primary/10 hover:bg-primary/20 active:bg-primary/10",
      },
      {
        variant: "destructive",
        ghost: true,
        class:
          "border-destructive/80 bg-destructive/10 text-destructive hover:bg-destructive/20 active:bg-destructive/10",
      },
      {
        variant: "secondary",
        ghost: true,
        class:
          "border-foreground/50 text-foreground/50 bg-foreground/10 hover:bg-foreground/15 active:bg-foreground/10",
      },
      {
        variant: "success",
        ghost: true,
        class:
          "text-success bg-success/10 hover:bg-success/20 active:bg-success/10",
      },
      {
        variant: "soft",
        ghost: true,
        class:
          "border-primary/20 text-primary bg-primary/10 hover:bg-primary/20 active:bg-primary/10",
      },
      {
        variant: "flat",
        ghost: true,
        class:
          "border-accent/80 bg-accent/50 text-accent-foreground/80 hover:bg-accent/80 active:bg-accent/50",
      },
      {
        variant: "info",
        ghost: true,
        class:
          "border-info bg-info/10 text-info hover:bg-info/20 active:bg-info/10",
      },
      {
        variant: "warning",
        ghost: true,
        class:
          "border-warning bg-warning/10 text-warning hover:bg-warning/20 active:bg-warning/10",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      outline: false,
      block: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "top" | "bottom";
  iconSpacing?: "wide" | "tight" | number;
  spinnerOnDisabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      outline,
      shape,
      block,
      asChild = false,
      icon,
      iconPosition = "left",
      iconSpacing = "default",
      children,
      disabled,
      spinnerOnDisabled,
      ghost,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const getIconSpacing = () => {
      if (typeof iconSpacing === "number") return iconSpacing * 4;
      if (iconSpacing === "tight") return 3;
      if (iconSpacing === "wide") return 15;
      return 5;
    };
    const spacing = getIconSpacing();
    const showSpinner = spinnerOnDisabled && disabled;
    const direction =
      iconPosition === "top"
        ? "flex-col-reverse"
        : iconPosition === "bottom"
        ? "flex-col"
        : iconPosition === "right"
        ? "flex-row"
        : "flex-row-reverse";

    const horizontalPadding = direction.includes("col") ? "py-[30px]" : "";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            outline,
            shape,
            block,
            className,
            ghost,
          }),
          horizontalPadding
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {showSpinner ? (
          <Spinner />
        ) : icon ? (
          <div
            className={cn("inline-flex", direction, "items-center")}
            style={{ gap: `${spacing}px` }}
          >
            <div>{children}</div>
            <div>{icon}</div>
          </div>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
