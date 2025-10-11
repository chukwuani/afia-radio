"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/siteConfig";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";

export function MobileNav() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [open, setOpen] = React.useState(false);

  if (isDesktop) return null;

  return (
    <section className="flex lg:hidden gap-3 items-center justify-between">
      <section className="flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="rounded-full w-fit relative size-[2.5rem] items-center justify-center"
            >
              <div className="animated-menu-icon"></div>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="pl-6 pr-7 pt-9 z-[1001]">
            <section className="w-full flex flex-col h-full">
              <section className="flex flex-col">
                <Link href="/" className="flex items-center mb-3">
                  <Image
                    width={80}
                    height={80}
                    src={"/images/afia-logo-dark.png"}
                    className="w-auto h-auto"
                    alt="Afia Radio Home"
                    title="Afia Radio Home"
                  />

                  <span className="sr-only">Home</span>
                </Link>

                {siteConfig.mainNav.map((item, index) => (
                  <MobileLink
                    key={index}
                    href={item.href}
                    pathname={pathname}
                    setOpen={setOpen}
                    disabled={item.disabled}
                  >
                    {item.title}
                  </MobileLink>
                ))}
              </section>

              <div className="flex flex-col mt-auto">
                <div className="flex flex-col mb-[1.25rem] gap-4 text-[1.1em]">
                  <a
                    className="text-foreground/60 text-sm hover:text-foreground"
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={siteConfig.links.x}
                  >
                    X
                  </a>
                  <a
                    className="text-foreground/60 text-sm hover:text-foreground"
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={siteConfig.links.instagram}
                  >
                    Instagram
                  </a>
                  <a
                    className="text-foreground/60 text-sm hover:text-foreground"
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={siteConfig.links.facebook}
                  >
                    Facebook
                  </a>
                </div>

                <p className="text-sm text-foreground/60">
                  &#169; 2025 Afia Network.
                </p>
              </div>
            </section>
          </SheetContent>
        </Sheet>
      </section>
    </section>
  );
}

interface MobileLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  disabled?: boolean;
  pathname: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setOpen,
  className,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/60 transition-colors hover:text-foreground text-sm capitalize py-4",
        href === pathname && "text-brand hover:text-brand font-bold",
        disabled && "pointer-events-none hover:no-underline opacity-60",
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
