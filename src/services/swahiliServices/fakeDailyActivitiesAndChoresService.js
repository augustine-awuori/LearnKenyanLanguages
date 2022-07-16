const chores = [
  { english: "Wash clothes", swahili: "Fua nguo" },
  { english: "Rinse clothes", swahili: "Kamua nguo " },
  { english: "Dry clothes", swahili: "Kausha nguo " },
  { english: "Wash the face", swahili: "Osha uso " },
  { english: "Clean the hands", swahili: "Nawa mikono " },
  { english: "Wash the child", swahili: "Osha/ogesha mtoto " },
  { english: "Serve the food", swahili: "Pakua chakula " },
  { english: "Iron clothes", swahili: "Pasa nguo " },
  { english: "Iron", swahili: "Piga pasi " },
  { english: "Cook food", swahili: "Pika chakula " },
  { english: "Clean the room", swahili: "Safisha chumba " },
  { english: "Make the bed", swahili: "Tandika kitanda " },
  { english: "Mop the house", swahili: "Piga deki " },
  { english: "Dust the table", swahili: "Panguza meza " },
  { english: "Arrange clothes", swahili: "Panga nguo " },
  { english: "Boil tea/food", swahili: "Chemsha chai/chakula" },
  { english: "Take a shower in the bathroom", swahili: "Oga bafuni " },
  { english: "Wash clothes", swahili: "Fua nguo " },
  { english: "Rinse clothes", swahili: "Kamua nguo " },
];

const activities = [
  { english: "To wake up", swahili: "Kuamka " },
  { english: "To wash the face", swahili: "Kunawa uso " },
  { english: "To take a shower", swahili: "Kuoga bafuni " },
  {
    english: "To eat breakfast",
    swahili:
      "Kula/kupata chakula cha asubuhi, kula/kupata staftahi, kula/kupata kiamshakinywa",
  },
  { english: "To eat lunch", swahili: "Kula/kupata chakula cha mchana" },
  { english: "To eat dinner", swahili: "Kula/kupata chakula cha jioni/usiku " },
  { english: "To brush the teeth", swahili: "Kupiga mswaki " },
  { english: "To go to class", swahili: "Kwenda darasani " },
  { english: "To study a book", swahili: "Kusoma kitabu " },
  { english: "To sleep", swahili: "Kulala" },
  { english: "To go play sports", swahili: "Kwenda michezoni " },
  { english: "To run", swahili: "Kukimbia" },
  { english: "To do exercises", swahili: "Kufanya mazoezi " },
  { english: "To go to work", swahili: "Kwenda kazini " },
  { english: "To go to the stores", swahili: "Kwenda dukani " },
  { english: "To go to the market", swahili: "Kwenda sokoni " },
  { english: "To go to a meeting", swahili: "Kwenda mkutanoni " },
  { english: "To go to church", swahili: "Kwenda kanisani " },
  { english: "To go to a party", swahili: "Kwenda karamuni" },
  { english: "To rest at home", swahili: "Kustarehe / kupumzika nyumbani " },
  { english: "To watch television", swahili: "Kuona/kutazama televisheni " },
  { english: "To go to a restaurant", swahili: "Kwenda mkahawani " },
  { english: "To take a picture", swahili: "Kupiga picha" },
  { english: "To make a call", swahili: "Kupiga simu " },
];

const getActivities = () => activities;

const getChores = () => chores;

export { getActivities, getChores };
