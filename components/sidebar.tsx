import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const sidebarItem = [
  {
    href: "/learn",
    label: "Learn",
    iconSrc: "/learn.svg",
  },
  {
    href: "/leaderboard",
    label: "Leaderboard",
    iconSrc: "/leaderboard.svg",
  },
  {
    href: "/quests",
    label: "Quests",
    iconSrc: "/quests.svg",
  },
  {
    href: "/shop",
    label: "Shop",
    iconSrc: "/shop.svg",
  },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {sidebarItem.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 text-muted-foreground animate-spin" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
