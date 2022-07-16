const callouts = [
  {
    content:
      "Swahili language, also called kiSwahili, Bantu language spoken either as mother tongue or as a fluent second language on the east coast of Africa in an area extending from Lamu Island, Kenya, in the north to the southern border of Tanzania in the south.",
    heading: "Learn Swahili",
    targetPageUrl: "/learn-swahili",
    image: require("../assets/images/swahili.jpg"),
  },
  {
    content:
      "Kamba, or Kikamba, is a Bantu language spoken by millions of Kamba people, primarily in Kenya, as well as thousands of people in Uganda, Tanzania, and elsewhere.",
    heading: "Learn Kikamba",
    targetPageUrl: "/learn-kikamba",
    image: require("../assets/images/kikamba.jpg"),
  },
  {
    content:
      "The luhya comprises a number of Bantu ethnic group native to western Kenya. They are divided into 20 culturally and linguistic related tribes. Luhya refers to both the 20 Luhya sub-tribes and their respective languages collectively called Luhya Languages.",
    heading: "Learn Luhya",
    targetPageUrl: "",
    image: require("../assets/images/luhya.jpg"),
  },
];

const getCallouts = () => callouts;

export { getCallouts };
