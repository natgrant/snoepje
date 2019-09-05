const initState = {
  products: [
    {
      id: "1",
      name: "Turmeric Chai W/ Coconut Mylk",
      size: "250",
      price: "4.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officiis voluptas exercitationem ipsa culpa a iure. Minima, maxime. Quos animi expedita aperiam corrupti modi error obcaecati suscipitpraesentium, exercitationem possimus.",
      stock: "true",
      image:
        "https://img.taste.com.au/PSoW8I3U/taste/2017/05/golden-turmeric-chai-latte1980x1320-127032-1.jpg",
      blurb:
        "For those days where you need a wee pick-me-up, this turmeric and ginger infused chai is sure to hit the spot"
    },
    {
      id: "2",
      name: "Kombucha",
      size: "250",
      price: "4.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officiis voluptas exercitationem ipsa culpa a iure. Minima, maxime. Quos animi expedita aperiam corrupti modi error obcaecati suscipit praesentium, exercitationem possimus.",
      stock: "false",
      image:
        "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      blurb:
        "Loaded with probiotics, our kombucha is made with blends of green and black tea, making it a delicious drink to enjoy and feel good about"
    }
  ]
};

const productReducer = (state = initState, action) => {
  return state;
};

export default productReducer;
