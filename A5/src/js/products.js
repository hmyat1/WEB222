/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Classic Men's Hoodie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 4500 = $45.00)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "20123",
    title: "Hoodie X",
    description:
      "Premium cotton hoodie with a modern design and comfortable fit.",
    price: 4500,
    discontinued: false,
    categories: ["HOO-MEN"],
    imageUrl: "./dave-herring-9bZiUoxSCfs-unsplash.jpg",
  },

  {
    id: "20124",
    title: "Cozy Comfort Hoodie",
    description:
      "Stay warm and stylish with this cozy comfort hoodie for men and women.",
    price: 5200,
    discontinued: false,
    categories: ["HOO-MEN", "HOO-WOMEN"],
    imageUrl: "./carter-brink-aAPLeoSmbk4-unsplash.jpg",
  },

  {
    id: "20125",
    title: "Urban Street Hoodie",
    description: "Show off your street style with this urban-inspired hoodie.",
    price: 4800,
    discontinued: false,
    categories: ["HOO-MEN"],
    imageUrl: "./dave-herring-9bZiUoxSCfs-unsplash.jpg",
  },

  {
    id: "20126",
    title: "Tech Fleece Hoodie",
    description:
      "Stay warm without the bulk with this lightweight tech fleece hoodie.",
    price: 5800,
    discontinued: false,
    categories: ["HOO-MEN"],
    imageUrl: "./carter-brink-aAPLeoSmbk4-unsplash.jpg",
  },

  {
    id: "20127",
    title: "Classic Zip-Up Hoodie",
    description: "A timeless zip-up hoodie for a casual and comfortable look.",
    price: 5000,
    discontinued: false,
    categories: ["HOO-WOMEN"],
    imageUrl: "./woody-kelly-R2G6S6gYVmM-unsplash.jpg",
  },

  {
    id: "20128",
    title: "Athleisure Hoodie",
    description:
      "Elevate your athleisure style with this trendy and comfortable hoodie.",
    price: 5400,
    discontinued: false,
    categories: ["HOO-WOMEN"],
    imageUrl: "./dave-herring-9bZiUoxSCfs-unsplash.jpg",
  },

  {
    id: "20129",
    title: "Color Block Hoodie",
    description:
      "Make a bold statement with this color block hoodie for men and women.",
    price: 5500,
    discontinued: false,
    categories: ["HOO-WOMEN"],
    imageUrl: "./dave-herring-9bZiUoxSCfs-unsplash.jpg",
  },

  {
    id: "20130",
    title: "Kids Adventure Hoodie",
    description: "Adventure-ready hoodie designed for the little explorers.",
    price: 3800,
    discontinued: false,
    categories: ["HOO-CHILDREN"],
    imageUrl: "./dave-herring-9bZiUoxSCfs-unsplash.jpg",
  },

  {
    id: "20131",
    title: "Double Hood Pullover",
    description:
      "Stay cozy with the double hood design of this pullover hoodie.",
    price: 4900,
    discontinued: false,
    categories: ["HOO-CHILDREN"],
    imageUrl: "./woody-kelly-R2G6S6gYVmM-unsplash.jpg",
  },

  {
    id: "20132",
    title: "Graphic Print Hoodie",
    description:
      "Express yourself with a stylish graphic print on this hoodie.",
    price: 4700,
    discontinued: false,
    categories: ["HOO-CHILDREN"],
    imageUrl: "./carter-brink-aAPLeoSmbk4-unsplash.jpg",
  },

  {
    id: "20133",
    title: "Quilted Hoodie",
    description:
      "Add texture to your wardrobe with this quilted design hoodie.",
    price: 5300,
    discontinued: false,
    categories: ["HOO-MEN"],
    imageUrl: "./woody-kelly-R2G6S6gYVmM-unsplash.jpg",
  },

  {
    id: "20134",
    title: "Cropped Hoodie",
    description:
      "Stay on-trend with a cropped hoodie for a modern and chic look.",
    price: 4200,
    discontinued: false,
    categories: ["HOO-WOMEN"],
    imageUrl: "./carter-brink-aAPLeoSmbk4-unsplash.jpg",
  },

  {
    id: "20135",
    title: "Vintage Wash Hoodie",
    description:
      "Achieve a vintage look with this washed-out and distressed hoodie.",
    price: 4600,
    discontinued: false,
    categories: ["HOO-MEN"],
    imageUrl: "./woody-kelly-R2G6S6gYVmM-unsplash.jpg",
  },

  {
    id: "20136",
    title: "Sporty Stripe Hoodie",
    description:
      "Add a sporty touch to your style with a stripe-accented hoodie.",
    price: 5100,
    discontinued: false,
    categories: ["HOO-WOMEN"],
    imageUrl: "./carter-brink-aAPLeoSmbk4-unsplash.jpg",
  },

  {
    id: "20137",
    title: "Sherpa Lined Hoodie",
    description:
      "Stay extra warm with a sherpa-lined interior in this cozy hoodie.",
    price: 6000,
    discontinued: false,
    categories: ["HOO-MEN", "HOO-WOMEN"],
    imageUrl: "./woody-kelly-R2G6S6gYVmM-unsplash.jpg",
  },
];
