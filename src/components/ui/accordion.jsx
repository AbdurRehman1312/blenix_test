import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "py-3 px-4 rounded-[30px] transition-all",
      "data-[state=open]:bg_gradient3 data-[state=open]:border data-[state=open]:border-custom-orange data-[state=closed]:bg-transparent data-[state=closed]:border",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";


const AccordionTrigger = React.forwardRef(({ className, children, isOpen, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center text-start justify-between lg:text-lg py-4 lg:pl-5 font-medium",
        className
      )}
      {...props}
    >
      {children}
      <div className={`${isOpen ? "bg-white" : "bg-transparent"} h-[10px] w-[10px] flex justify-center items-center p-5 transition-transform duration-200 rounded-full`}>
        {isOpen ? <ChevronUp className="shrink-0 w-6 h-6 text-custom-orange" /> : <ChevronDown className="shrink-0 w-6 h-6" />}
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger"; // Set displayName directly

export default AccordionTrigger; // Export the component for use in other files


const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden lg:text-lg transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 lg:px-5", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };