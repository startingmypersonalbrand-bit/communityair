import authorElena from "@/assets/author-elena.jpg";
import authorKwame from "@/assets/author-kwame.jpg";
import authorSofia from "@/assets/author-sofia.jpg";
import authorArjun from "@/assets/author-arjun.jpg";
import authorClaire from "@/assets/author-claire.jpg";
import authorDiego from "@/assets/author-diego.jpg";

export interface Author {
  id: string;
  name: string;
  genre: string;
  country: string;
  bio: string;
  latestInterview: string;
  image: string;
  website: string;
  books: string[];
}

export const authors: Author[] = [
  {
    id: "elena-marchetti",
    name: "Elena Marchetti",
    genre: "Literary Fiction",
    country: "Italy",
    bio: "Elena writes luminous novels about memory and belonging along the Ligurian coast. Her work has been translated into fourteen languages.",
    latestInterview: "The Weight of Inheritance — Ep. 148",
    image: authorElena,
    website: "elenamarchetti.example",
    books: ["The Olive Grove Letters", "Salt and Silence"],
  },
  {
    id: "kwame-adjei",
    name: "Kwame Adjei",
    genre: "Historical Fiction",
    country: "Ghana",
    bio: "Kwame reconstructs the untold stories of West Africa's trading empires with meticulous research and a storyteller's heart.",
    latestInterview: "Gold Coast Chronicles — Ep. 152",
    image: authorKwame,
    website: "kwameadjei.example",
    books: ["The Drum Keeper", "River of Kings"],
  },
  {
    id: "sofia-lindqvist",
    name: "Sofia Lindqvist",
    genre: "Crime & Thriller",
    country: "Sweden",
    bio: "Sofia's ice-cold Nordic thrillers have topped bestseller lists across Europe. She writes from a cabin north of Stockholm.",
    latestInterview: "Anatomy of a Twist — Ep. 145",
    image: authorSofia,
    website: "sofialindqvist.example",
    books: ["The Frost Ledger", "Midnight Harbour"],
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    genre: "Poetry",
    country: "India",
    bio: "Arjun's verse moves between Mumbai's monsoon streets and quiet interior worlds. Winner of the Southbank Poetry Prize.",
    latestInterview: "Poetry Sessions Live — Ep. 141",
    image: authorArjun,
    website: "arjunmehta.example",
    books: ["Monsoon Arithmetic", "Letters to a City"],
  },
  {
    id: "claire-beaumont",
    name: "Claire Beaumont",
    genre: "Memoir",
    country: "Canada",
    bio: "Claire's memoirs of rural Quebec, grief, and second chances have earned her a devoted international readership.",
    latestInterview: "Writing What Hurts — Ep. 150",
    image: authorClaire,
    website: "clairebeaumont.example",
    books: ["Winter Light", "The Long Table"],
  },
  {
    id: "diego-alvarez",
    name: "Diego Álvarez",
    genre: "Magical Realism",
    country: "Mexico",
    bio: "Diego conjures towns where the dead give advice and rivers change course out of spite. Heir to a grand tradition, wholly his own voice.",
    latestInterview: "Maps of the Impossible — Ep. 139",
    image: authorDiego,
    website: "diegoalvarez.example",
    books: ["The Cartographer's Widow", "Rain That Remembers"],
  },
];

export type CoverVariant = "amber" | "burgundy" | "forest" | "ink" | "dusk" | "sand";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  description: string;
  cover: CoverVariant;
  shelf: "Trending" | "New Releases" | "Editor's Picks" | "Award Winners";
  imageUrl?: string;
  amazonUrl?: string;
}

export const books: Book[] = [
  // Trending
  {
    id: "regime-change",
    title: "Regime Change: Inside the Imperial Presidency of Donald Trump",
    author: "Maggie Haberman & Jonathan Swan",
    category: "Political Nonfiction",
    rating: 4.5,
    description:
      "A sweeping account of the second Trump presidency from two of the country's most respected political journalists.",
    cover: "ink",
    shelf: "Trending",
    imageUrl: "https://m.media-amazon.com/images/P/1668067242.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Regime-Change-Inside-Imperial-Presidency/dp/1668067242/ref=zg_bsnr_g_books_d_sccl_1/138-9474442-3677029?psc=1",
  },
  {
    id: "the-calamity-club",
    title: "The Calamity Club: A Novel",
    author: "Kathryn Stockett",
    category: "Historical Fiction",
    rating: 4.6,
    description:
      "The multimillion-copy-selling author of The Help returns with a bold, big-hearted novel about unbreakable women fighting for what's rightfully theirs.",
    cover: "burgundy",
    shelf: "Trending",
    imageUrl: "https://m.media-amazon.com/images/P/1954118813.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Calamity-Club-Novel-Kathryn-Stockett/dp/1954118813/ref=zg_bsnr_g_books_d_sccl_2/138-9474442-3677029?psc=1",
  },
  {
    id: "heartstopper-6",
    title: "Heartstopper #6: A Graphic Novel",
    author: "Alice Oseman",
    category: "Graphic Novel",
    rating: 4.8,
    description:
      "The final installment in the bestselling LGBTQ+ graphic novel series about life, love, and everything that happens in between.",
    cover: "forest",
    shelf: "Trending",
    imageUrl: "https://m.media-amazon.com/images/P/1546102442.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Heartstopper-6-Graphic-Novel/dp/1546102442/ref=zg_bsnr_g_books_d_sccl_5/138-9474442-3677029?psc=1",
  },
  {
    id: "the-divorce",
    title: "The Divorce",
    author: "Freida McFadden",
    category: "Psychological Thriller",
    rating: 4.3,
    description:
      "A brand-new, gripping thriller from the #1 New York Times bestselling author of The Housemaid. What is a happily ever after really worth?",
    cover: "dusk",
    shelf: "Trending",
    imageUrl: "https://m.media-amazon.com/images/P/1464249636.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Divorce-Freida-McFadden/dp/1464249636/ref=zg_bsnr_g_books_d_sccl_10/138-9474442-3677029?psc=1",
  },

  // New Releases
  {
    id: "the-whistler",
    title: "Whistler",
    author: "Ann Patchett",
    category: "Literary Fiction",
    rating: 4.7,
    description:
      "The acclaimed, prize-winning #1 New York Times bestselling writer returns with a moving, luminous novel about the sweetness and impermanence of life.",
    cover: "amber",
    shelf: "New Releases",
    imageUrl: "https://m.media-amazon.com/images/P/0063511630.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Whistler-Novel-Ann-Patchett/dp/0063511630/ref=zg_bsnr_g_books_d_sccl_3/138-9474442-3677029?psc=1",
  },
  {
    id: "cancel-me-if-you-can",
    title: "Cancel Me If You Can",
    author: "Dave Portnoy",
    category: "Memoir",
    rating: 4.1,
    description:
      "In his unfiltered style, Dave Portnoy details the journey of how he built his polarizing media empire, Barstool Sports.",
    cover: "sand",
    shelf: "New Releases",
    imageUrl: "https://m.media-amazon.com/images/P/1668222027.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Cancel-Me-If-You-Can/dp/1668222027/ref=zg_bsnr_g_books_d_sccl_4/138-9474442-3677029?psc=1",
  },
  {
    id: "thrilling-tales",
    title: "Thrilling Tales of Modern Men: Stories",
    author: "Danny McBride",
    category: "Short Stories",
    rating: 4.2,
    description:
      "A short story collection from the creator of The Righteous Gemstones that mines masculinity, jealousy, overcompensation, and the legends we tell ourselves.",
    cover: "dusk",
    shelf: "New Releases",
    imageUrl: "https://m.media-amazon.com/images/P/0593594754.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Thrilling-Tales-Modern-Men-Stories/dp/0593594754/ref=zg_bsnr_g_books_d_sccl_28/138-9474442-3677029?psc=1",
  },
  {
    id: "shield-of-sparrows-3",
    title: "Shield of Sparrows #3: An Epic Romantic Fantasy",
    author: "Devney Perry",
    category: "Romantic Fantasy",
    rating: 4.5,
    description:
      "The third and final book in the epic Shield of Sparrows romantic fantasy trilogy. Fight for the monster you love.",
    cover: "forest",
    shelf: "New Releases",
    imageUrl: "https://m.media-amazon.com/images/P/168281825X.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Seven-Swift-Romantic-Fantasy-Sparrows/dp/168281825X/ref=zg_bsnr_g_books_d_sccl_31/138-9474442-3677029?psc=1",
  },

  // Editor's Picks
  {
    id: "the-deal",
    title: "The Deal",
    author: "Elle Kennedy",
    category: "Romance",
    rating: 4.5,
    description:
      "New York Times bestseller Elle Kennedy brings you a sexy Off-Campus novel about a deal with the college bad boy.",
    cover: "dusk",
    shelf: "Editor's Picks",
    imageUrl: "https://m.media-amazon.com/images/P/1775293939.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Deal-Off-Campus-Elle-Kennedy/dp/1775293939/ref=zg_bs_g_books_d_sccl_10/138-9474442-3677029?psc=1",
  },
  {
    id: "the-very-hungry-caterpillar",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    category: "Children's",
    rating: 4.9,
    description:
      "A timeless classic that follows a very hungry caterpillar as it grows from egg to cocoon to beautiful butterfly.",
    cover: "forest",
    shelf: "Editor's Picks",
    imageUrl: "https://m.media-amazon.com/images/P/0399226907.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907/ref=zg_bs_g_books_d_sccl_11/138-9474442-3677029?psc=1",
  },
  {
    id: "the-cool-machine",
    title: "The Cool Machine: A Novel",
    author: "Colson Whitehead",
    category: "Historical Fiction",
    rating: 4.4,
    description:
      "The conclusion to the two-time Pulitzer winner's Harlem trilogy. Ray Carney and Pepper navigate midlife, a changing city, and one more dubious scheme.",
    cover: "ink",
    shelf: "Editor's Picks",
    imageUrl: "https://m.media-amazon.com/images/P/B0FX7Z2KMJ.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Cool-Machine-Novel-Harlem-Trilogy-ebook/dp/B0FX7Z2KMJ/ref=s9_acsd_al_ot_c2_x_0_t?_encoding=UTF8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=AJYFHHYW108GVECPFPWE&pf_rd_p=1e46487d-527d-422b-85ae-54ffc65932d6&pf_rd_t=&pf_rd_i=17143709011",
  },
  {
    id: "the-intrigue",
    title: "The Intrigue",
    author: "Silvia Moreno-Garcia",
    category: "Noir Thriller",
    rating: 4.5,
    description:
      "From the New York Times bestselling author of Mexican Gothic comes a sizzling noir about desire, danger, and greed in 1940s Mexico.",
    cover: "burgundy",
    shelf: "Editor's Picks",
    imageUrl: "https://m.media-amazon.com/images/P/B0FWBBFLWK.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Intrigue-Silvia-Moreno-Garcia-ebook/dp/B0FWBBFLWK/ref=s9_acsd_al_ot_c2_x_1_t?_encoding=UTF8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=AJYFHHYW108GVECPFPWE&pf_rd_p=1e46487d-527d-422b-85ae-54ffc65932d6&pf_rd_t=&pf_rd_i=17143709011",
  },

  // Award Winners
  {
    id: "the-prize",
    title: "The Prize: The Epic Quest for Oil, Money & Power",
    author: "Daniel Yergin",
    category: "Business History",
    rating: 4.7,
    description:
      "Winner of the Pulitzer Prize, this panoramic history chronicles the struggle for wealth and power surrounding the world's most important resource.",
    cover: "amber",
    shelf: "Award Winners",
    imageUrl: "https://m.media-amazon.com/images/P/B004T4KKSA.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Prize-Epic-Quest-Money-Power-ebook/dp/B004T4KKSA/ref=s9_acsd_al_ot_c2_x_0_t?_encoding=UTF8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=9FFP32SXMYFPJBEN8K7N&pf_rd_p=1f03cb0e-9320-4de3-bea3-830c78c513f3&pf_rd_t=&pf_rd_i=122176947011",
  },
  {
    id: "the-jasmine-throne",
    title: "The Jasmine Throne",
    author: "Tasha Suri",
    category: "Fantasy",
    rating: 4.4,
    description:
      "A ruthless princess and a powerful priestess come together to rewrite the fate of an empire in this fiercely feminist tale of revolution.",
    cover: "dusk",
    shelf: "Award Winners",
    imageUrl: "https://m.media-amazon.com/images/P/B08F4YZZ84.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Jasmine-Throne-Burning-Kingdoms-Book-ebook/dp/B08F4YZZ84/ref=s9_acsd_al_ot_c2_x_1_t?_encoding=UTF8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=9FFP32SXMYFPJBEN8K7N&pf_rd_p=1f03cb0e-9320-4de3-bea3-830c78c513f3&pf_rd_t=&pf_rd_i=122176947011",
  },
  {
    id: "you-can-tell-me",
    title: "You Can Tell Me",
    author: "Melinda Leigh",
    category: "Mystery Thriller",
    rating: 4.4,
    description:
      "Crime writer Olivia Cruz is drawn into the dark secrets of a missing friend in a terrifying novel of suspense by a #1 Wall Street Journal bestselling author.",
    cover: "sand",
    shelf: "Award Winners",
    imageUrl: "https://m.media-amazon.com/images/P/B0F1Z1QFKD.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/You-Tell-Olivia-Cruz-Book-ebook/dp/B0F1Z1QFKD/ref=v1fx_newRelease_18_re_nbs_nr_nbs_001_0?_encoding=UTF8&pd_rd_w=7Udcm&content-id=amzn1.sym.6eafadc3-fbb7-4fb2-b5a6-e2b061d2a492&pf_rd_p=6eafadc3-fbb7-4fb2-b5a6-e2b061d2a492&pf_rd_r=8NJ22P5SP11Z0G6XNZ4M&pd_rd_wg=zfWtQ&pd_rd_r=2cbb7876-3e8e-48e4-873d-a84189d93d5c",
  },
  {
    id: "the-safe-room",
    title: "The Safe Room: A Short Story",
    author: "Lisa Unger",
    category: "Thriller",
    rating: 4.3,
    description:
      "Private investigator Rae Donovan discovers a hidden room and dark secrets when she returns to her estranged father's isolated Adirondack home.",
    cover: "forest",
    shelf: "Award Winners",
    imageUrl: "https://m.media-amazon.com/images/P/B0G82Q44Q9.01._SCRM_SL500_.jpg",
    amazonUrl:
      "https://www.amazon.com/Safe-Room-Short-Story-ebook/dp/B0G82Q44Q9/ref=v1fx_newRelease_18_re_nbs_nr_nbs_002_0?_encoding=UTF8&pd_rd_w=7Udcm&content-id=amzn1.sym.6eafadc3-fbb7-4fb2-b5a6-e2b061d2a492&pf_rd_p=6eafadc3-fbb7-4fb2-b5a6-e2b061d2a492&pf_rd_r=8NJ22P5SP11Z0G6XNZ4M&pd_rd_wg=zfWtQ&pd_rd_r=2cbb7876-3e8e-48e4-873d-a84189d93d5c",
  },
];


export interface Episode {
  id: string;
  title: string;
  guest: string;
  show: string;
  category: string;
  duration: string;
  summary: string;
  cover: CoverVariant;
  listenUrl: string;
}

export const episodes: Episode[] = [
  {
    id: "ep-152",
    title: "History Through Fiction",
    guest: "Mike Duncan",
    show: "History Through Fiction — The Podcast",
    category: "Historical Fiction",
    duration: "54 min",
    summary:
      "A podcast where history comes alive through fiction — conversations with authors and historians about the real events behind unforgettable historical novels.",
    cover: "burgundy",
    listenUrl: "https://music.amazon.com/podcasts/3d4e3863-3475-4536-b9a8-7f256ed12055/history-through-fiction---the-podcast",
  },
  {
    id: "ep-150",
    title: "Finding Me",
    guest: "Viola Davis",
    show: "Finding Me: A Memoir",
    category: "Memoir",
    duration: "47 min",
    summary:
      "Viola Davis's deeply personal memoir, narrated by the author. A powerful journey from poverty and trauma to becoming one of the most celebrated artists of our time.",
    cover: "sand",
    listenUrl: "https://www.audible.com/pd/Finding-Me-Audiobook/B09F4X96MC",
  },
  {
    id: "ep-148",
    title: "The Verb",
    guest: "Ian McMillan",
    show: "BBC Radio 4 — The Verb",
    category: "Literary Fiction",
    duration: "42 min",
    summary:
      "Ian McMillan hosts Radio 4's cabaret of the word, featuring the best poetry, new writing, and performance from leading literary voices.",
    cover: "amber",
    listenUrl: "https://www.bbc.co.uk/programmes/b006tnsf",
  },
  {
    id: "ep-145",
    title: "Anatomy of Murder",
    guest: "Scott & Laura",
    show: "Anatomy of Murder",
    category: "Crime & Thriller",
    duration: "43 min",
    summary:
      "A true-crime podcast from audiochuck that takes you inside murder cases through the eyes of the investigators, attorneys, and families at the heart of each story.",
    cover: "ink",
    listenUrl: "https://www.iheart.com/podcast/1319-anatomy-of-murder-71878286/",
  },
  {
    id: "ep-141",
    title: "Poetry Unbound",
    guest: "Pádraig Ó Tuama",
    show: "Poetry Unbound",
    category: "Poetry",
    duration: "15 min",
    summary:
      "Short, unhurried episodes hosted by Pádraig Ó Tuama — an immersive exploration of a single poem, with wisdom to offer and questions to ask.",
    cover: "dusk",
    listenUrl: "https://podcasts.apple.com/us/podcast/poetry-unbound/id1492928827",
  },
  {
    id: "ep-139",
    title: "What is Magical Realism?",
    guest: "Vanessa Diaz",
    show: "Book Riot — The Podcast",
    category: "Magical Realism",
    duration: "60 min",
    summary:
      "From Book Riot: a lively conversation about what magical realism is, where it comes from, and how to talk about it with readers and writers.",
    cover: "forest",
    listenUrl: "https://open.spotify.com/episode/7GYIEgp2bPyIaFM4q1bfEG",
  },
];

export interface Show {
  name: string;
  host: string;
  day: string;
  time: string;
  description: string;
  cover: CoverVariant;
}

export const shows: Show[] = [
  {
    name: "Author Spotlight",
    host: "Maya Okafor",
    day: "Monday",
    time: "18:00 GMT",
    description: "One author, one hour, one unforgettable conversation about the work of a lifetime.",
    cover: "amber",
  },
  {
    name: "Book of the Week",
    host: "James Whitfield",
    day: "Tuesday",
    time: "17:00 GMT",
    description: "Our editors crown one title and make the case for why it belongs on your shelf.",
    cover: "burgundy",
  },
  {
    name: "Story Hour",
    host: "Rosa Delgado",
    day: "Wednesday",
    time: "20:00 GMT",
    description: "Short fiction read aloud by the people who wrote it — lights down, volume up.",
    cover: "dusk",
  },
  {
    name: "Indie Voices",
    host: "Tom Akerman",
    day: "Thursday",
    time: "18:00 GMT",
    description: "Self-published and small-press authors breaking through without the machine.",
    cover: "forest",
  },
  {
    name: "Literary Lounge",
    host: "Maya Okafor",
    day: "Friday",
    time: "19:00 GMT",
    description: "A late-week salon: news, debates, and the conversations the book world is having.",
    cover: "ink",
  },
  {
    name: "Behind the Manuscript",
    host: "Priya Nair",
    day: "Saturday",
    time: "16:00 GMT",
    description: "Drafts, rejections, rewrites — the unglamorous truth of how books actually get made.",
    cover: "sand",
  },
  {
    name: "Poetry Sessions",
    host: "Rosa Delgado",
    day: "Sunday",
    time: "11:00 GMT",
    description: "Sunday-morning verse, live readings, and poets on the craft of compression.",
    cover: "dusk",
  },
  {
    name: "Classic Reads",
    host: "James Whitfield",
    day: "Sunday",
    time: "21:00 GMT",
    description: "The canon, revisited without reverence. Old books, fresh arguments.",
    cover: "burgundy",
  },
];

export const coverGradients: Record<CoverVariant, string> = {
  amber: "from-[oklch(0.55_0.11_70)] to-[oklch(0.3_0.06_60)]",
  burgundy: "from-[oklch(0.42_0.13_15)] to-[oklch(0.22_0.08_10)]",
  forest: "from-[oklch(0.45_0.09_150)] to-[oklch(0.24_0.05_155)]",
  ink: "from-[oklch(0.35_0.04_260)] to-[oklch(0.18_0.02_260)]",
  dusk: "from-[oklch(0.42_0.09_300)] to-[oklch(0.22_0.05_290)]",
  sand: "from-[oklch(0.6_0.06_80)] to-[oklch(0.35_0.04_70)]",
};
