const mieziYaMwaka = [
  { swahili: "Januari ", english: "January " },
  { swahili: "Februari", english: "February" },
  { swahili: "Machi", english: "March" },
  { swahili: "Aprili ", english: "April " },
  { swahili: "Mei", english: "May" },
  { swahili: "Juni ", english: "June" },
  { swahili: "Juli ", english: "July" },
  { swahili: "Agosti  ", english: "August" },
  { swahili: "Septemba", english: "September" },
  { swahili: "Oktoba", english: "October" },
  { swahili: "Novemba", english: "November" },
  { swahili: "Disemba", english: "December" },
];

const notes = [
  { swahili: "Mwaka", english: "Year" },
  { swahili: "Tarehe", english: "Date" },
  { swahili: "mwezi / miezi", english: "Year(s)" },
  { swahili: "Zaliwa", english: "to be born" },
  { swahili: "Lini", english: "When" },
];

const mazoezi = [
  {
    mfano:
      "Example : Nilizaliwa tarehe nne mwezi wa nane ,mwaka wa elfu moja mia nane themanini na nne ( I was born on 4th August 1884)",
    swali: "Ulizaliwa lini?",
  },
];

const getMieziYaMwaka = () => mieziYaMwaka;

const getNotes = () => notes;

const getMazoezi = () => mazoezi;

export { getMazoezi, getNotes, getMieziYaMwaka };
