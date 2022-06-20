const contents = [
  {
    id: 1,
    heading: "Maamkizi Greetings",
    url: "/maamkizi-greetings",
    previousId: null,
    nextId: 2,
  },
  {
    id: 2,
    heading: "Bidding Goodbye in Swahili",
    url: "/bidding-goodbye",
    previousId: 1,
    nextId: 3,
  },
  {
    id: 3,
    heading: "Goodnight in Swahili",
    url: "/goodnight",
    previousId: 2,
    nextId: 4,
  },
  {
    id: 4,
    heading: "Other useful phrases that will come in handy",
    url: "/useful-phrases",
    previousId: 3,
    nextId: 5,
  },
  { id: 5, heading: "Tarakimu", url: "/tarakimu", previousId: 4, nextId: 6 },
  {
    id: 6,
    heading: "Siku za Wiki (Days of the week)",
    url: "/siku-za-wiki",
    previousId: 5,
    nextId: 7,
  },
  {
    id: 7,
    heading: "Miezi ya Mwaka (Months of the year)",
    url: "/miezi-ya-mwaka",
    previousId: 6,
    nextId: 8,
  },
  {
    id: 8,
    heading: "Familia (Family)",
    url: "/familia",
    previousId: 7,
    nextId: 9,
  },
  {
    id: 9,
    heading: "Sehemu za Mwili",
    url: "/sehemu-za-mwili",
    previousId: 8,
    nextId: 10,
  },
];

const getContents = () => contents;

export { getContents };
