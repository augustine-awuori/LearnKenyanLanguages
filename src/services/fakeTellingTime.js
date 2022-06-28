const tellingTime = [
  { english: "7 am", swahili: "Saa moja asubuhi" },
  { english: "8 am", swahili: "Saa mbili asubuhi" },
  { english: "9 am", swahili: "Saa tatu asubuhi" },
  { english: "10 am", swahili: "Saa nne asubuhi" },
  { english: "11 am", swahili: "Saa tano asubuhi" },
  { english: "12 pm", swahili: "Saa sita mchana" },
  { english: "1 pm", swahili: "Saa saba mchana" },
  { english: "2 pm", swahili: "Saa nane mchana" },
  { english: "3 pm", swahili: "Saa tisa mchana" },
  { english: "4 pm", swahili: "Saa kumi jioni" },
  { english: "5 pm", swahili: "Saa kumi na moja jioni" },
  { english: "6 pm", swahili: "Saa kumi na mbili jioni" },
  { english: "7 pm", swahili: "Saa moja usiku" },
  { english: "8 pm", swahili: "Saa mbili usiku" },
  { english: "9 pm", swahili: "Saa tatu usiku" },
  { english: "10 pm", swahili: "Saa nne usiku" },
  { english: "11 pm", swahili: "Saa tano usiku" },
  { english: "12 am", swahili: "Saa sita usiku" },
  { english: "1 am", swahili: "Saa saba usiku" },
  { english: "2 am", swahili: "Saa nane usiku" },
  { english: "3 am", swahili: "Saa tisa usiku" },
  { english: "4 am", swahili: "Saa kumi alfajiri" },
  { english: "5 am", swahili: "Saa kumi na moja alfajiri" },
  { english: "6 am", swahili: "Saa kumi na mbili alfajiri" },
];

const maswali = [
  { english: "what is the time ? - 10:00 am", swahili: "Ni saa ngapi?" },
  {
    english: "What is the time now ? - 5:00 pm",
    swahili: "Sasa ni saa ngapi ?",
  },
];

const getTellingTime = () => tellingTime;

const getMaswali = () => maswali;

export { getTellingTime, getMaswali };
