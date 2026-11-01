import type { SiteConfig } from "@/lib/types";

const BOOK = "https://app.squareup.com/appointments/book/3lmnmmls2dhkrl/L34FN4BAYBNXR/start";
const IG = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "Kiss The Paws Pet Grooming Salon",
  tagline: "Pet grooming served with love in Leslieville and Riverside, Toronto. Accepting new clients of all sizes.",
  category: "Dog and cat grooming",
  schemaType: "LocalBusiness",
  area: "Leslieville, Toronto, ON",
  siteUrl: "https://kiss-the-paws.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#996663" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Riverside's go to for dog glow ups",
    headline: "Pet grooming served with love",
    subhead: "Full grooms, breed cuts, fresh tidy ups and cat nail capping on Queen St E. Book online in a few taps or text (647) 667-9810.",
    images: [
      { src: "/images/fresh-groom.jpg", alt: "Freshly groomed small dog in a bandana at Kiss The Paws" },
      { src: "/images/matilda.jpg", alt: "Puppy Matilda at her first groom" },
      { src: "/images/vivian.jpg", alt: "Vivian after her glow up" },
    ],
    primaryCta: { label: "Book now", href: BOOK },
    secondaryCta: { label: "See the grooms", href: "#gallery" },
  },

  highlights: ["Accepting new clients of all sizes", "$10 off your first full service", "Accessories and dog friendly scents on the house", "717 Queen St E, Toronto"],

  about: {
    title: "Stylish, clean pups, groomed with love and respect",
    body: [
      "At Kiss The Paws, every pup gets personalized care, gentle grooming and lots of love. From full grooms to fresh tidy ups, we will have your dog looking and feeling their best.",
      "Owner and groomer Yasemin loves welcoming new faces, and puppy first grooms are a favourite. Accessories and dog friendly scents are always on the house.",
    ],
    image: { src: "/images/long-coat.jpg", alt: "Long coated dog on the grooming table" },
  },

  menu: {
    title: "Grooming services",
    label: "Services",
    intro: "Every pet is different, so prices are shared when you book. Text or book online for a quote.",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Dogs",
        note: "Appointment required for full services",
        items: [
          { name: "Full groom", description: "Bath, cut and finish, with accessories and a dog friendly scent included." },
          { name: "Breed cuts", description: "Specialty styles for Poodles, Yorkies, Shih Tzus, Cockers and more." },
          { name: "Fresh tidy up", description: "A neat refresh between full grooms." },
          { name: "Gland expression", description: "Available with your groom." },
          { name: "Puppy first groom", description: "A gentle, happy introduction to grooming." },
        ],
      },
      {
        title: "Cats",
        items: [
          { name: "Bath and brush", description: "A clean, soft coat." },
          { name: "Cat nail capping", description: "Scratch free furniture and unscratched pet siblings and pawrents." },
        ],
      },
    ],
  },

  gallery: {
    title: "Fresh from the grooming table",
    items: [
      { src: "/images/fresh-groom.jpg", width: 1080, height: 1080, alt: "Small dog after a full groom", caption: "First visit glow up", href: IG + "DU8_29rEYzJ/" },
      { src: "/images/before-groom.jpg", width: 1080, height: 1080, alt: "Small dog before grooming", caption: "Before the groom", href: IG + "DU8_29rEYzJ/" },
      { src: "/images/matilda.jpg", width: 1080, height: 1080, alt: "Puppy Matilda", caption: "Baby Matilda's first groom", href: IG + "DU9AyrEESI3/" },
      { src: "/images/vivian.jpg", width: 1080, height: 1080, alt: "Vivian after grooming", caption: "Vivian, ready and smelling sweet", href: IG + "DUt5JizEYS5/" },
      { src: "/images/before-vivian.jpg", width: 1080, height: 1080, alt: "Dachshund before grooming", caption: "Before her grooming", href: IG + "DUt5JizEYS5/" },
      { src: "/images/long-coat.jpg", width: 1080, height: 1080, alt: "Long coated dog on the table", caption: "Gentle care for long coats" },
      { src: "/images/cat-nails.jpg", width: 1080, height: 1080, alt: "Cat nail capping", caption: "Cat nail capping. So diva!", href: IG + "DX2-hIdjI7M/" },
      { src: "/images/breed-cuts.jpg", width: 1080, height: 1080, alt: "Breed cuts special", caption: "Breed cuts for Poodles, Yorkies and more", href: IG + "DYSb7YuxcWs/" },
      { src: "/images/first-visit-offer.jpg", width: 1080, height: 1350, alt: "$10 off first appointment offer", caption: "$10 off your first appointment", href: IG + "DfDZL_9qhrm/" },
    ],
  },

  instagram: {
    handle: "kiss.the.paws",
    embeds: [],
  },

  order: {
    title: "Book your pup's next groom",
    label: "How to book",
    intro: "Book online through Square Appointments, or text us for prices and openings. Prefer Instagram? Tap below to copy a starter message.",
    dmMessage: "Hi Kiss The Paws! I would like to book a groom.\nPreferred date:\nPet's name, breed and size:\nService (full groom, breed cut, tidy up, nails):\nStyle idea:",
    links: [
      { label: "Book online", href: BOOK },
      { label: "Text (647) 667-9810", href: "sms:+16476679810" },
    ],
    note: "Appointments are required for full services. New clients save $10 on their first full service, and referrals save $10 too (dogs only).",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Book online through Square Appointments or text (647) 667-9810." },
    { q: "How much does a groom cost?", a: "Prices depend on your pet's size and coat. Text us or check the booking page for prices." },
    { q: "Do you take new clients?", a: "Yes! We are accepting new clients of all sizes, and your first full service is $10 off." },
    { q: "Do you groom cats?", a: "Yes, including bath and brush and cat nail capping." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Leslieville and Riverside, Toronto",
    address: "717 Queen St E Unit 100A, Toronto, ON M4M 1H1",
    phone: "(647) 667-9810",
    socials: [{ label: "Book on Square", href: BOOK }],
  },

  seo: {
    title: "Kiss The Paws Pet Grooming Salon | Dog and cat grooming in Toronto",
    description: "Dog and cat grooming on Queen St E in Leslieville and Riverside, Toronto. Full grooms, breed cuts and cat nail capping. Book online or text to book today.",
    keywords: ["dog grooming Leslieville", "pet grooming Riverside Toronto", "dog groomer Queen St E", "cat nail capping Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
