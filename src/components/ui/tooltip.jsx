"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        side="bottom"
        className={cn(
          "z-50 overflow-hidden rounded-md bg_glass text-white px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-w-[97vw] mx-2 lg:max-w-auto",
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const ResponsiveTooltip = ({ children, content }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef(null); // Prevent flickering

  // Detect if screen is mobile
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Mobile when width < 1024px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default tooltip behavior on mobile

    if (!isMobile) return; // Only allow toggle on mobile

    // Clear any existing timeout
    clearTimeout(timeoutRef.current);

    // Add slight delay to prevent flickering
    timeoutRef.current = setTimeout(() => {
      setOpen((prev) => !prev);
    }, 100);
  };

  return (
    <TooltipProvider delayDuration={isMobile ? 0 : 300}>
      <Tooltip open={isMobile ? open : undefined} onOpenChange={isMobile ? setOpen : undefined}>
        <TooltipTrigger
          onClick={handleClick}
          className="cursor-pointer"
          asChild // Ensures Radix Tooltip doesn't override events
        >
          <span>{children}</span>
        </TooltipTrigger>
        {isMobile ? (
          open && <TooltipContent>{content}</TooltipContent>
        ) : (
          <TooltipContent>{content}</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, ResponsiveTooltip };
