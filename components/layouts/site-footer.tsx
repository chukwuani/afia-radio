"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/siteConfig";

import { Shell } from "./shell";
import { buttonVariants } from "../ui/button";
import JoinNewsletterForm from "../join-newsletter-form";
import { Icons } from "../icons";

import { cn } from "@/lib/utils";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

export default function Footer() {
  const { isOpen } = useAudioPlayerStore((state) => state);

  return (
    <footer className={cn("w-full bg-[#0F0F0F] bg-[url('/images/footer-bg.png')] bg-no-repeat bg-cover", isOpen && "pb-[100px]")}>
      <Shell className="!gap-0 md:!pt-[60px]">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20 mb-4"
        >
          <section
            className="max-w-[300px] w-full flex flex-col-reverse lg:flex-col gap-[40px] lg:gap-[74px]"
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <p className="text-[12px] leading-[180%] font-epilogue text-muted-foreground">
              Afia 99.3 FM is your go-to station for music, culture, and stories that celebrate the Igbo spirit — from top hits to conversations that shape our community.
            </p>

            <Link
              href="/"
              className="flex w-full h-auto max-w-[200px] items-center space-x-2"
            >
              <Image
                width={100}
                height={92}
                className="w-auto h-auto "
                src={"/images/afia-logo-dark.png"}
                alt="Afia Radio"
                title="Afia Radio"
              />

              <span className="sr-only">Home</span>
            </Link>
          </section>

          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-3"
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-[14px] leading-[16px] font-epilogue mb-7">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-[12px] leading-[16px] text-muted-foreground transition-colors hover:text-foreground font-epilogue"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <JoinNewsletterForm />
        </section>

        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-xs leading-loose text-muted-foreground">
            © 2025 Afia Network. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.x className="size-4" aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </Link>

            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.facebook className="size-4" aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.instagram className="size-5" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </section>
      </Shell>
    </footer>
  );
}
