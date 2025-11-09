interface HighlightCopy {
  readonly title: string;
  readonly description: string;
}

interface NewArrivalCardCopy {
  readonly title: string;
  readonly subtitle: string;
  readonly price: string;
  readonly detail: string;
}

interface TranslationContent {
  readonly header: {
    readonly nav: {
      readonly home: string;
      readonly about: string;
      readonly gallery: string;
    };
    readonly callUs: string;
    readonly callAria: string;
    readonly contactButtonAria: string;
    readonly homeLinkAria: string;
    readonly menuToggleAria: string;
    readonly languageToggleLabel: string;
    readonly languageToggleAria: string;
    readonly mainNavAria: string;
    readonly mobileNavAria: string;
  };
  readonly hero: {
    readonly line1: string;
    readonly line2: string;
    readonly description: string;
    readonly cta: string;
    readonly imageAlt: string;
  };
  readonly heroImage: {
    readonly placeholder: string;
    readonly fallbackAlt: string;
  };
  readonly trending: {
    readonly headingLine1: string;
    readonly headingLine2: string;
    readonly cta: string;
    readonly subheading: string;
    readonly description: string;
  };
  readonly productCard: {
    readonly fallback: string;
  };
  readonly newArrivals: {
    readonly heading: string;
    readonly featured: {
      readonly tagline: string;
      readonly title: string;
      readonly price: string;
      readonly variants: string;
    };
    readonly first: NewArrivalCardCopy;
    readonly second: NewArrivalCardCopy;
    readonly cta: string;
    readonly bigImageAria: string;
    readonly bigImagePlaceholder: string;
    readonly smallImageAria: string;
    readonly smallImagePlaceholder: string;
  };
  readonly shopByRoom: {
    readonly heading: string;
    readonly rooms: {
      readonly living: string;
      readonly bedroom: string;
      readonly office: string;
      readonly dining: string;
      readonly kitchen: string;
    };
  };
  readonly inspiration: {
    readonly heading: string;
    readonly products: {
      readonly modern: string;
      readonly retro: string;
    };
    readonly placeholder: string;
  };
  readonly footer: {
    readonly marquee: string;
    readonly legal: string;
    readonly socialAria: string;
    readonly sofaAlt: string;
  };
  readonly about: {
    readonly label: string;
    readonly headingLine1: string;
    readonly headingLine2: string;
    readonly description: string;
    readonly highlights: readonly HighlightCopy[];
    readonly cta: string;
    readonly imageAlt: string;
    readonly imagePlaceholder: string;
  };
  readonly gallery: {
    readonly label: string;
    readonly heading: string;
    readonly description: string;
    readonly images: {
      readonly armchair: string;
      readonly bookshelf: string;
      readonly desk: string;
      readonly lounge: string;
      readonly lamp: string;
      readonly modernRoom: string;
      readonly recliner: string;
      readonly retroRoom: string;
      readonly sofa: string;
      readonly sofa2: string;
      readonly table: string;
    };
  };
  readonly inspiredCard: {
    readonly placeholder: string;
  };
  readonly smallImage: {
    readonly aria: string;
    readonly placeholderAria: string;
    readonly placeholderLabel: string;
  };
  readonly bigImage: {
    readonly aria: string;
    readonly placeholder: string;
  };
  readonly aboutImage: {
    readonly placeholder: string;
    readonly fallbackAlt: string;
  };
}

type Language = "en" | "bg";

const translations: Record<Language, TranslationContent> = {
  en: {
    header: {
      nav: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
      },
      callUs: "Call Us",
      callAria: "Call FurniLab",
      contactButtonAria: "Call FurniLab",
      homeLinkAria: "FurniLab home",
      menuToggleAria: "Toggle navigation menu",
      languageToggleLabel: "BG",
      languageToggleAria: "Switch language to Bulgarian",
      mainNavAria: "Main navigation",
      mobileNavAria: "Mobile navigation",
    },
    hero: {
      line1: "FINE",
      line2: "FURNISHINGS",
      description:
        "Choosing the right furniture for your home online will add elegance and functionality to your space. We offer a curated collection of fine furnishing.",
      cta: "Shop Now",
      imageAlt: "Neutral-toned living room with modern furniture",
    },
    heroImage: {
      placeholder: "Hero Image Placeholder",
      fallbackAlt: "Furnilab collection",
    },
    trending: {
      headingLine1: "FOR TRENDING",
      headingLine2: "NOW",
      cta: "See All",
      subheading: "CUTTING-EDGE\nFURNITURE TRENDS",
      description:
        "Choosing the right furniture for your home online will add elegance and functionality to your space with comfort and elegance.",
    },
    productCard: {
      fallback: "Product Image",
    },
    newArrivals: {
      heading: "NEW ARRIVAL",
      featured: {
        tagline: "Plush Comfort Seating",
        title: "Sierra Lounge Armchair",
        price: "$899",
        variants: "6 colorways",
      },
      first: {
        title: "Willow Recliner",
        subtitle: "Includes ottoman",
        price: "$620",
        detail: "4 recline modes",
      },
      second: {
        title: "Atlas Bookshelf",
        subtitle: "Modular shelves",
        price: "$480",
        detail: "3 wood finishes",
      },
      cta: "Explore",
      bigImageAria: "New arrival highlight",
      bigImagePlaceholder: "Main New Arrival Image",
      smallImageAria: "Small preview",
      smallImagePlaceholder: "Placeholder image",
    },
    shopByRoom: {
      heading: "BEST SHOP BY\nROOM",
      rooms: {
        living: "Living Room",
        bedroom: "Bedroom",
        office: "Office",
        dining: "Dining Room",
        kitchen: "Kitchen Room",
      },
    },
    inspiration: {
      heading: "GET INSPIRED",
      products: {
        modern: "Modern Collection 2025",
        retro: "Retro Collection 1980s",
      },
      placeholder: "Image Placeholder",
    },
    footer: {
      marquee: "FURNISHINGS",
      legal: "© Furniture. All rights reserved",
      socialAria: "Social media links",
      sofaAlt: "Sofa illustration",
    },
    about: {
      label: "About Furnilab",
      headingLine1: "DESIGNED",
      headingLine2: "FOR LIVING",
      description:
        "Furnilab is a collective of designers, makers, and curators devoted to creating furniture that feels lived-in from day one. Each piece is thoughtfully crafted to anchor memories, invite conversation, and move gracefully with the rhythm of your home.",
      highlights: [
        {
          title: "Curated craftsmanship",
          description:
            "We hand-select pieces from artisans who blend timeless design with modern comfort.",
        },
        {
          title: "Sustainable materials",
          description:
            "Every collection features responsibly sourced woods, recycled metals, and low-impact fabrics.",
        },
        {
          title: "Design-first service",
          description:
            "Our stylists guide you from mood board to move-in with personalized layouts and finish pairings.",
        },
      ],
      cta: "Visit our showroom",
      imageAlt: "Modern living room vignette from Furnilab showroom",
      imagePlaceholder: "About Image Placeholder",
    },
    gallery: {
      label: "Gallery",
      heading: "Crafted Scenes",
      description:
        "Explore every finish, upholstery, and silhouette from our seasonal collections. Each capture is styled by our team to help you imagine how the pieces layer into your own spaces.",
      images: {
        armchair: "Olive green armchair with rounded silhouette",
        bookshelf: "Walnut bookshelf with asymmetrical shelving",
        desk: "Minimal study desk with integrated storage drawers",
        lounge: "Neutral-toned lounge with layered textures",
        lamp: "Matte black arc floor lamp with globe shade",
        modernRoom: "Warm neutral living room anchored by a sectional sofa",
        recliner: "Tufted leather recliner with brass base",
        retroRoom: "Retro inspired living room with bold colors",
        sofa: "Camel leather sofa styled with cozy throws",
        sofa2: "Curved modular sofa in a sunlit loft",
        table: "Round dining table with sculptural base",
      },
    },
    inspiredCard: {
      placeholder: "Image Placeholder",
    },
    smallImage: {
      aria: "Small preview",
      placeholderAria: "Placeholder image",
      placeholderLabel: "Small Image",
    },
    bigImage: {
      aria: "New arrival highlight",
      placeholder: "Main New Arrival Image",
    },
    aboutImage: {
      placeholder: "About Image Placeholder",
      fallbackAlt: "Furnilab studio showcase",
    },
  },
  bg: {
    header: {
      nav: {
        home: "Начало",
        about: "За нас",
        gallery: "Галерия",
      },
      callUs: "Позвънете",
      callAria: "Обадете се на FurniLab",
      contactButtonAria: "Обадете се на FurniLab",
      homeLinkAria: "Начална страница на FurniLab",
      menuToggleAria: "Превключване на навигацията",
      languageToggleLabel: "EN",
      languageToggleAria: "Смени езика на английски",
      mainNavAria: "Основна навигация",
      mobileNavAria: "Мобилна навигация",
    },
    hero: {
      line1: "СТИЛ",
      line2: "И ИНТЕРИОР",
      description:
        "Изборът на правилните мебели за вашия дом онлайн добавя елегантност и функционалност към всяко пространство. Ние предлагаме подбрана колекция от изискани мебели.",
      cta: "Пазарувай",
      imageAlt: "Всекидневна в неутрални тонове с модерни мебели",
    },
    heroImage: {
      placeholder: "Заглушка за основно изображение",
      fallbackAlt: "Колекция на FurniLab",
    },
    trending: {
      headingLine1: "АКТУАЛНИ",
      headingLine2: "ПРЕДЛОЖЕНИЯ",
      cta: "Виж всички",
      subheading: "НАПРЕДНИЧАВИ\nТЕНДЕНЦИИ В МЕБЕЛИТЕ",
      description:
        "Подборът на подходящи мебели за дома онлайн носи стил и функционалност, без да прави компромис с удобството.",
    },
    productCard: {
      fallback: "Изображение на продукт",
    },
    newArrivals: {
      heading: "НАЙ-НОВИ ПРОДУКТИ",
      featured: {
        tagline: "Мека комфортна седалка",
        title: "Фотьойл Sierra Lounge",
        price: "$899",
        variants: "6 цвята",
      },
      first: {
        title: "Релакс стол Willow",
        subtitle: "С включена табуретка",
        price: "$620",
        detail: "4 позиции на наклон",
      },
      second: {
        title: "Етажерка Atlas",
        subtitle: "Модулни рафтове",
        price: "$480",
        detail: "3 дървесни финиша",
      },
      cta: "Разгледай",
      bigImageAria: "Акцент от новите продукти",
      bigImagePlaceholder: "Основно изображение на нов продукт",
      smallImageAria: "Малък преглед",
      smallImagePlaceholder: "Заглушка за малко изображение",
    },
    shopByRoom: {
      heading: "ПАЗАРУВАЙ ПО\nСТАИ",
      rooms: {
        living: "Дневна",
        bedroom: "Спалня",
        office: "Офис",
        dining: "Трапезария",
        kitchen: "Кухня",
      },
    },
    inspiration: {
      heading: "ВДЪХНОВИ СЕ",
      products: {
        modern: "Модерна колекция 2025",
        retro: "Ретро колекция 80-те",
      },
      placeholder: "Заглушка за изображение",
    },
    footer: {
      marquee: "МЕБЕЛИ",
      legal: "© Furniture. Всички права запазени",
      socialAria: "Връзки към социални мрежи",
      sofaAlt: "Изображение на диван",
    },
    about: {
      label: "За FurniLab",
      headingLine1: "СЪЗДАДЕНО",
      headingLine2: "ЗА ЖИВОТ",
      description:
        "FurniLab обединява дизайнери, майстори и куратори, които създават мебели с усещане за дом още от първия ден. Всяко изделие е премислено, за да пази спомени, да предразполага към разговор и да следва ритъма на вашия дом.",
      highlights: [
        {
          title: "Подбрано майсторство",
          description:
            "Подбираме творби от занаятчии, които съчетават неподвластен на времето дизайн със съвременен комфорт.",
        },
        {
          title: "Устойчиви материали",
          description:
            "Всяка колекция включва отговорно добити дървесини, рециклирани метали и щадящи околната среда платове.",
        },
        {
          title: "Дизайн-ориентирано обслужване",
          description:
            "Нашите стилисти ви водят от първоначалната идея до настаняването с персонализирани разпределения и комбинации от покрития.",
        },
      ],
      cta: "Посети шоурума ни",
      imageAlt: "Модерен хол от шоурума на FurniLab",
      imagePlaceholder: "Заглушка за изображение в раздела „За нас“",
    },
    gallery: {
      label: "Галерия",
      heading: "ВСИЧКИ НАШИ ПРОДУКТИ",
      description:
        "Разгледайте всички покрития, тапицерии и силуети от сезонните ни колекции. Всяка сцена е стилизирана от нашия екип, за да си представите как мебелите оживяват във вашия дом.",
      images: {
        armchair: "Маслиненозелен фотьойл със заоблен силует",
        bookshelf: "Орехова етажерка с асиметрични рафтове",
        desk: "Минималистично бюро с вградени чекмеджета",
        lounge: "Стая за отдих в неутрални тонове със слоести текстури",
        lamp: "Матово черна подова лампа с аркова форма и сферичен абажур",
        modernRoom: "Топъл неутрален хол с ъглов диван",
        recliner: "Кожен релакс стол с капитонировка и месингова основа",
        retroRoom: "Ретро хол с дръзки цветове",
        sofa: "Камилски кожен диван със стилни одеяла",
        sofa2: "Извит модулен диван в слънчево лофт пространство",
        table: "Кръгла трапезна маса със скулптурна основа",
      },
    },
    inspiredCard: {
      placeholder: "Заглушка за изображение",
    },
    smallImage: {
      aria: "Малък преглед",
      placeholderAria: "Заглушка за изображение",
      placeholderLabel: "Малко изображение",
    },
    bigImage: {
      aria: "Акцент от новите продукти",
      placeholder: "Основно изображение на нов продукт",
    },
    aboutImage: {
      placeholder: "Заглушка за изображение в раздела „За нас“",
      fallbackAlt: "Студио на FurniLab",
    },
  },
};

export type { Language, TranslationContent };
export { translations };
