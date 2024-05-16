import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorClassName?: string;
  errorMessages?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, errorClassName, errorMessages, color, ...props },
    ref
  ) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-1 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            errorMessages && "border-red-600"
          )}
          ref={ref}
          {...props}
        />
        {errorMessages && <p className="text-red-600 ">{errorMessages}</p>}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
