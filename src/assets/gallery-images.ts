export type GalleryImageKey =
  | "armchair"
  | "bookshelf"
  | "desk"
  | "lounge"
  | "lamp"
  | "modernRoom"
  | "recliner"
  | "retroRoom"
  | "sofa"
  | "sofa2"
  | "table";

export interface GalleryImage {
  src: string;
  altKey: GalleryImageKey;
  orientation: "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/armchair.png",
    altKey: "armchair",
    orientation: "portrait",
  },
  {
    src: "/bookshelf.png",
    altKey: "bookshelf",
    orientation: "portrait",
  },
  {
    src: "/desk.png",
    altKey: "desk",
    orientation: "landscape",
  },
  {
    src: "/hero-image.png",
    altKey: "lounge",
    orientation: "landscape",
  },
  {
    src: "/lamp.png",
    altKey: "lamp",
    orientation: "portrait",
  },
  {
    src: "/modern-room.png",
    altKey: "modernRoom",
    orientation: "landscape",
  },
  {
    src: "/recliner.png",
    altKey: "recliner",
    orientation: "portrait",
  },
  {
    src: "/retro-room.png",
    altKey: "retroRoom",
    orientation: "landscape",
  },
  {
    src: "/sofa.png",
    altKey: "sofa",
    orientation: "landscape",
  },
  {
    src: "/sofa2.png",
    altKey: "sofa2",
    orientation: "landscape",
  },
  {
    src: "/table.png",
    altKey: "table",
    orientation: "portrait",
  },
];


