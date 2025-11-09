import modernRoom from "/modern-room.png";
import retroRoom from "/retro-room.png";

type InspirationProductKey = "modern" | "retro";

interface InspirationProduct {
  src: string;
  translationKey: InspirationProductKey;
}

type RoomTranslationKey = "living" | "bedroom" | "office" | "dining" | "kitchen";

interface RoomDetail {
  src: string;
  translationKey: RoomTranslationKey;
}

const inspirationProducts: InspirationProduct[] = [
  {
    src: modernRoom,
    translationKey: "modern",
  },
  {
    src: retroRoom,
    translationKey: "retro",
  },
];

const roomDetails: RoomDetail[] = [
  {
    src: "https://images.unsplash.com/photo-1656122381069-9ec666d95cf1?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    translationKey: "living",
  },
  {
    src: "https://images.unsplash.com/photo-1668089677938-b52086753f77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    translationKey: "bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1674694773977-0fd9a6e983d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    translationKey: "office",
  },
  {
    src: "https://images.unsplash.com/photo-1710005897739-1f174b24de63?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    translationKey: "dining",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    translationKey: "kitchen",
  },
];

export type {
  InspirationProduct,
  InspirationProductKey,
  RoomDetail,
  RoomTranslationKey,
};
export { inspirationProducts, roomDetails };
