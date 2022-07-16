const mfano = [
  {
    swahili: "Mimi ni-naitwa George. ",
    english: "I am called George / My name is George",
  },
  { swahili: "Sisi tu-napika", english: "We are cooking" },
  {
    swahili: "Yeye a-naitwa Jane. ",
    english: "He is called Jane / His name is Jane",
  },
  { swahili: "Wao wa-naenda  India", english: "They are going to India" },
];

const getPronounsMfano = () => mfano;

const getFirstPerson = () => ({
  heading: "1st Person",
  data: [
    { nafsi: "Mimi - [I / Me]", kiwakilishi: "NI-" },
    { nafsi: "Sisi - [We / Us]", kiwakilishi: "TU-" },
  ],
});

const getSecondPerson = () => ({
  heading: "2nd Person",
  data: [
    { nafsi: "Wewe - [You]", kiwakilishi: "U-" },
    { nafsi: "Ninyi - [You]", kiwakilishi: "M-" },
  ],
});

const getThirdPerson = () => ({
  heading: "3rd Person",
  data: [
    { nafsi: "Yeye - [He / She, Her / Him]", kiwakilishi: "A-" },
    { nafsi: "Wao - [They / Them]", kiwakilishi: "WA-" },
  ],
});

const getAllPronouns = () => [
  getFirstPerson(),
  getSecondPerson(),
  getThirdPerson(),
];

export { getAllPronouns, getPronounsMfano };
