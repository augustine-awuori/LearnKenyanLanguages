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
      "Kikuyu, also called Gikuyu or Agikuyu, Bantu-speaking people who live in the highland area of south-central Kenya, near Mount Kenya.",
    heading: "Learn Kikamba",
    targetPageUrl: "",
    image: require("../assets/images/kikuyu.jpg"),
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
