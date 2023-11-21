"use client";

import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import clsx from "clsx";

interface DesktopItemProps {
  href: string;
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => Promise<undefined>;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} className="relative">
      <Link
        href={href}
        className={clsx(
          "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold hover:text-black hover:bg-gray-100",
          active && "bg-gray-100 text-black",
          onClick && "cursor-pointer"
        )}
      >
        <span
          className={clsx(
            "flex flex-col items-center justify-center w-full h-14 hover:bg-gray-100 rounded-lg",
            {
              "bg-gray-100": active,
            }
          )}
        >
          <Icon className="w-6 h-6 shrink-0" />
          <span className="sr-only">{label}</span>
        </span>
      </Link>
    </li>
  );
};

export default DesktopItem;
