import { Phone, Gauge, CoinVertical, Code, BookOpenText, Video, Rocket } from "@phosphor-icons/react";


export type MenuOption = {
  name: string;
  href: string;
  description?: string;
  icon: SVGAElement | any;
};

export type CTA = {
  name: string;
  href: string;
  icon?: SVGAElement | any;
};

export const navbarSimpleLinks = [
  {
    name: 'Plans & Pricing',
    href:'https://gaming.chainsafe.io/pricing/',
  },
  {
    name: 'Consulting',
    href:'https://gaming.chainsafe.io/consulting/',
  },
  {
    name: 'Start building',
    href:'https://gaming.chainsafe.io/start-building/',
  }
]


export const productCTA = [
  { name: "Contact", href: "https://gaming.chainsafe.io/", icon: Phone },
];

export const productOptions: MenuOption[] = [
  {
    name: "Download SDK",
    description: "Start building a web3 game or import blockchain features",
    href: "https://github.com/ChainSafe/web3.unity/releases",
    icon: Code,
  },
  {
    name: "Marketplace",
    description: "Join the waitlist!",
    href: "https://marketplace.chainsafe.io/",
    icon: CoinVertical,
  },
  {
    name: "Project Dashboard",
    description: "Add game analytics, lootboxes and more.",
    href: "https://dashboard.gaming.chainsafe.io/",
    icon: Gauge,
  },
];


export const resourcesOptions: MenuOption[] = [
  {
    name: "Documentation",
    description: "View examples, guides and more.",
    href: "https://docs.gaming.chainsafe.io",
    icon: BookOpenText,
  },
  {
    name: "Tutorials",
    description: "Learn how to build with the SDK",
    href: "https://www.youtube.com/playlist?list=PLPn3rQCo3XrOQkC3v55Ou8NMPgn8pb7O5",
    icon: Video,
  },
  {
    name: "About ChainSafe",
    description: "Built by the leading web3 R&D firm",
    href: 'https://chainsafe.io/',
    icon: Rocket
  },
];
