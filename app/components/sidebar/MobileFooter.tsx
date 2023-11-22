"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import React from "react";
import MobileItem from "./MobileItem";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(false);

  if (isOpen) {
    return null;
  }

  return (
    <>
      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        currentUser={currentUser}
      />
      <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
        {routes.map((route, index) => (
          <MobileItem
            key={index}
            href={route.href}
            label={route.label}
            icon={route.icon}
            active={route.active}
            onClick={route.onClick}
          />
        ))}
        <div
          onClick={() => setSettingsModalOpen(true)}
          className={
            "group flex gap-x-3 w-full justify-center p-4 hover:bg-gray-100"
          }
        >
          <Avatar user={currentUser} />
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
