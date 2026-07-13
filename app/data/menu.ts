export type MenuItem = {
  name: string;
  price: string;
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const featuredDishes: (MenuItem & { description: string; image: string })[] = [
  {
    name: "Chicken Souvlaki",
    price: "$19",
    description: "Grilled chicken skewers with rice, roasted potatoes, Greek salad, tzatziki & pita.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    name: "Roast Lamb",
    price: "$26",
    description: "Slow-roasted lamb, a Socrates family recipe passed down for generations.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
  },
  {
    name: "Lamb Chops",
    price: "$28",
    description: "Char-grilled lamb chops served with all the traditional sides.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
  },
  {
    name: "Greek Appy Platter",
    price: "$40",
    description: "A generous sharing platter of our favourite starters — perfect for the table.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&q=80",
  },
  {
    name: "Family Style Souvlaki Dinner",
    price: "$68",
    description: "A feast built for the whole family, straight from our kitchen to yours.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    name: "Greek Yogurt Cheesecake",
    price: "$8",
    description: "Creamy, tangy, and made fresh in-house — the perfect finish.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
  },
];

export const galleryImages: string[] = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
  "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80",
  "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
];

export const menu: MenuCategory[] = [
  {
    title: "Starters",
    items: [
      { name: "Saganaki", price: "$15" },
      { name: "Spanakopita", price: "$10" },
      { name: "Tiropita", price: "$10" },
      { name: "Kalamari", price: "$15" },
      { name: "Keftedes", price: "$15" },
      { name: "Garlic Prawns", price: "$15" },
      { name: "Greek Fries", price: "$7" },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Greek", price: "$15" },
      { name: "Kale Caesar", price: "$15" },
      { name: "Bulgur Salad", price: "$15" },
    ],
  },
  {
    title: "Soup",
    items: [{ name: "Fresh Daily Soup", price: "$7" }],
  },
  {
    title: "Dips",
    items: [
      { name: "Hummus", price: "$7" },
      { name: "Tzatziki", price: "$7" },
      { name: "Olive Tapenade", price: "$8" },
      { name: "Tirokafteri", price: "$8" },
      { name: "Dip Sampler", price: "$13" },
    ],
  },
  {
    title: "Souvlaki",
    note: "Comes with rice, roasted potatoes, Greek salad, tzatziki & pita",
    items: [
      { name: "Chicken", price: "$19" },
      { name: "Lamb", price: "$24" },
      { name: "Pork", price: "$18" },
      { name: "Beef", price: "$21" },
      { name: "Prawn", price: "$23" },
      { name: "Souvlaki Wrap", price: "$10" },
      { name: "Veggie Wrap", price: "$10" },
    ],
  },
  {
    title: "Greek Specialties",
    note: "Comes with rice, roasted potatoes, Greek salad, tzatziki & pita",
    items: [
      { name: "Roast Lamb", price: "$26" },
      { name: "Moussaka", price: "$21" },
      { name: "Lamb Chops", price: "$28" },
      { name: "Greek Ribs", price: "$23" },
      { name: "Roast Chicken", price: "$21" },
      { name: "Kalamari", price: "$21" },
      { name: "Spanakopita", price: "$19" },
      { name: "Greek Ribs & Chicken", price: "$23" },
    ],
  },
  {
    title: "BBQ, Pasta & More",
    items: [
      { name: "Garlic Prawns", price: "$23" },
      { name: "BBQ Ribs", price: "$23" },
      { name: "BBQ Chicken", price: "$21" },
      { name: "BBQ Ribs & Chicken", price: "$24" },
      { name: "Lasagna", price: "$17" },
    ],
  },
  {
    title: "Pizza",
    note: "Fresh dough daily",
    items: [
      { name: "Socrates — Small", price: "$19" },
      { name: "Socrates — Medium", price: "$22" },
      { name: "Socrates — Large", price: "$27" },
      { name: "Greek — Small", price: "$19" },
      { name: "Greek — Medium", price: "$22" },
      { name: "Greek — Large", price: "$27" },
      { name: "Plato's — Small", price: "$19" },
      { name: "Plato's — Medium", price: "$22" },
      { name: "Plato's — Large", price: "$27" },
      { name: "Create Your Own — Small", price: "$17" },
      { name: "Create Your Own — Medium", price: "$19" },
      { name: "Create Your Own — Large", price: "$23" },
    ],
  },
  {
    title: "Combo Specials",
    items: [
      { name: "2 Lasagna", price: "$30" },
      { name: "Family Style Souvlaki Dinner", price: "$68" },
      { name: "Greek Appy Platter", price: "$40" },
      { name: "2 Pizza — Small", price: "$25" },
      { name: "2 Pizza — Medium", price: "$30" },
      { name: "2 Pizza — Large", price: "$40" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Greek Yogurt Cheesecake", price: "$8" },
      { name: "Ekmek Kataifi", price: "$8" },
      { name: "Baklava", price: "$8" },
      { name: "Bougatsa", price: "$8" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Greek Soft Drinks", price: "$3" },
      { name: "Mastiqua", price: "$5" },
      { name: "Frappe", price: "$3" },
      { name: "Souroti", price: "$3" },
      { name: "Loux", price: "$3.50" },
      { name: "Ioli", price: "$2" },
      { name: "Anassa Tea", price: "$3" },
    ],
  },
];
