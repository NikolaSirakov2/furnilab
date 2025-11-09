import { useState } from "react";

import { roomDetails, type RoomDetail } from "../assets/data";
import { RoomLink } from "./RoomLink";
import { useLanguage } from "../i18n/LanguageContext";

const ShopByRoom = () => {
  const { dictionary } = useLanguage();
  const rooms = roomDetails;

  const defaultRoom = rooms[0] ?? null;
  const [activeRoom, setActiveRoom] = useState<RoomDetail | null>(defaultRoom);

  function handleMouseEnter(room: RoomDetail) {
    setActiveRoom(room);
  }

  function handleMouseLeave() {
    setActiveRoom(defaultRoom);
  }

  if (!rooms.length) {
    return null;
  }

  const activeRoomLabel = activeRoom
    ? dictionary.shopByRoom.rooms[activeRoom.translationKey]
    : "";

  return (
    <section className="relative max-w-[1350px] 2xl:max-w-[1600px] mx-auto p-4 sm:p-8 mt-20 mb-20">
      <h2 className="heading-2 impact whitespace-pre-line">
        {dictionary.shopByRoom.heading}
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-20">
        <div className="lg:w-1/3">
          {rooms.map((room) => (
            <RoomLink
              key={room.translationKey}
              onMouseEnter={() => handleMouseEnter(room)}
              onMouseLeave={handleMouseLeave}
            >
              {dictionary.shopByRoom.rooms[room.translationKey]}
            </RoomLink>
          ))}
        </div>

        <div className="relative mt-12 lg:mt-0 lg:w-2/3">
          <div
            className="absolute inset-0 z-10 rounded-3xl bg-linear-to-t from-black/50 to-transparent"
            aria-hidden="true"
          />
          <img
            src={activeRoom?.src}
            alt={activeRoomLabel}
            className="relative z-0 h-[420px] w-full rounded-3xl object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-8 left-8 z-20 rounded-full border border-white/40 bg-white/20 px-6 py-3 backdrop-blur-md">
            <p className="text-lg font-semibold text-white tracking-wide">
              {activeRoomLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByRoom;
