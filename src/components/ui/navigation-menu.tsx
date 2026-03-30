"use client";

import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function navigationMenuTriggerStyle() {
  return cn(
    "group inline-flex min-h-9 items-center justify-center gap-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50"
  );
}

function NavigationMenuRoot({
  className,
  children,
  ...props
}: NavigationMenu.Root.Props) {
  return (
    <NavigationMenu.Root
      data-slot="navigation-menu"
      className={cn("relative flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </NavigationMenu.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: NavigationMenu.List.Props) {
  return (
    <NavigationMenu.List
      data-slot="navigation-menu-list"
      className={cn("flex list-none items-center gap-1.5", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: NavigationMenu.Item.Props) {
  return (
    <NavigationMenu.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenu.Trigger.Props) {
  return (
    <NavigationMenu.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        navigationMenuTriggerStyle(),
        "bg-transparent text-white hover:bg-white/10 hover:text-yellow-300 data-[popup-open]:bg-white/10 data-[popup-open]:text-yellow-300",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 transition-transform duration-200 group-data-[popup-open]:rotate-180" />
    </NavigationMenu.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenu.Content.Props) {
  return (
    <NavigationMenu.Portal>
      <NavigationMenu.Positioner
        data-slot="navigation-menu-positioner"
        className="z-50 pt-3"
        sideOffset={12}
      >
        <NavigationMenu.Popup
          className={cn(
            "origin-[var(--transform-origin)] overflow-hidden rounded-[1.75rem] border border-white/10 bg-baltimorePurple/95 p-3 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
            className
          )}
        >
          <NavigationMenu.Content
            data-slot="navigation-menu-content"
            {...props}
          />
        </NavigationMenu.Popup>
      </NavigationMenu.Positioner>
    </NavigationMenu.Portal>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      data-slot="navigation-menu-link"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    />
  );
}

export {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot as NavigationMenu,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
};
