<<<<<<< HEAD
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
<<<<<<< HEAD
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"
=======
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 sm:gap-2.5 dark:text-gray-400",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"
=======
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 dark:text-gray-400 sm:gap-2.5",
      className,
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
<<<<<<< HEAD
))
BreadcrumbItem.displayName = "BreadcrumbItem"
=======
));
BreadcrumbItem.displayName = "BreadcrumbItem";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
<<<<<<< HEAD
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
=======
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

  return (
    <Comp
      ref={ref}
<<<<<<< HEAD
      className={cn("transition-colors hover:text-gray-950 dark:hover:text-gray-50", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"
=======
      className={cn(
        "transition-colors hover:text-gray-950 dark:hover:text-gray-50",
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-gray-950 dark:text-gray-50", className)}
    {...props}
  />
<<<<<<< HEAD
))
BreadcrumbPage.displayName = "BreadcrumbPage"
=======
));
BreadcrumbPage.displayName = "BreadcrumbPage";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
<<<<<<< HEAD
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
=======
    className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)}
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
<<<<<<< HEAD
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
=======
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
<<<<<<< HEAD
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
=======
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
<<<<<<< HEAD
}
=======
};
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d
