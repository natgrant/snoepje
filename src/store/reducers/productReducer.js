const initState = {
  products: [
    {
      id: "1",
      name: "Turmeric Chai W/ Coconut Mylk",
      size: "250",
      price: "4.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officiis voluptas exercitationem ipsa culpa a iure. Minima, maxime. Quos animi expedita aperiam corrupti modi error obcaecati suscipitpraesentium, exercitationem possimus.",
      stock: "true"
    },
    {
      id: "2",
      name: "Kombucha",
      size: "250",
      price: "4.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officiis voluptas exercitationem ipsa culpa a iure. Minima, maxime. Quos animi expedita aperiam corrupti modi error obcaecati suscipit praesentium, exercitationem possimus.",
      stock: "false"
    }
  ]
};

const productReducer = (state = initState, action) => {
  return state;
};

export default productReducer;
