// This is your new data structure. 
// You can add more photos to each category.

export const galleryData = [
  {
    id: "cat_painting",
    title: "Painting Collection",
    description: "A collection of various paintings.",
    // This is the main image for the collection card
    coverImage: "/images/Test.jpeg", 
    tag: "painting",
    // These are the individual photos inside the collection
    photos: [
      { id: "p1", title: "Serene Lake", image: "/images/Test.jpeg" },
      { id: "p2", title: "Mountain Majesty", image: "https://picsum.photos/seed/mountain/800/600" },
      { id: "p3", title: "Abstract Blues", image: "https://picsum.photos/seed/abstract/800/600" },
    ]
  },
  {
    id: "cat_sketch",
    title: "Sketch Collection",
    description: "A series of charcoal and pencil sketches.",
    // MODIFIED: Changed the local image path to a working placeholder
    coverImage: "https://picsum.photos/seed/sketchcover/800/600",
    tag: "sketch",
    // I've added two new photos here
    photos: [
      // MODIFIED: Changed the local image path to a working placeholder
      { id: "s1", title: "Portrait Study", image: "https://picsum.photos/seed/portrait/800/600" },
      { id: "s2", title: "Architectural Lines", image: "https://picsum.photos/seed/arch/800/600" },
      { id: "s3", title: "Floral Sketch", image: "https://picsum.photos/seed/floral/800/600" },
      { id: "s4", title: "Dynamic Figure", image: "https://picsum.photos/seed/figure/800/600" },
    ]
  }
];
