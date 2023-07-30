const publicDir = process.env.PUBLIC_URL;

const cards = {
  1: {
    id: 1,
    mainPicture: publicDir + "/clothing-items/main1.jpg",
    otherPicture: [
      publicDir + "/clothing-items/1-1.jpg",
      publicDir + "/clothing-items/1-2.jpg",
    ],
    des: "blah blah blah blah",
    used: "like-new",
  },
  2: {
    id: 2,
    mainPicture: publicDir + "/clothing-items/main2.jpg",
    otherPicture: [
      publicDir + "/clothing-items/2-1.jpg",
      publicDir + "/clothing-items/2-2.jpg",
    ],
    des: "blah blah blah blah",
    used: "like-new",
  },
  3: {
    id: 3,
    mainPicture: publicDir + "/clothing-items/main3.jpg",
    otherPicture: [
      publicDir + "/clothing-items/3-1.jpg",
      publicDir + "/clothing-items/3-2.jpg",
    ],
    des: "blah blah blah blah",
    used: "like-new",
  },
  4: {
    id: 4,
    mainPicture: publicDir + "/clothing-items/main4.png",
    otherPicture: [
      publicDir + "/clothing-items/4-1.png",
      publicDir + "/clothing-items/4-2.png",
      publicDir + "/clothing-items/4-3.png"
    ],
    name:'Flowy Skirt',
    des: "Green color, with various designs throughout. Light, stretchy material, really soft and comfy. Pre-loved, with no flaws.",
    used: "like-new",
    price: 5,
    measurements: {
      waist: '21',
      length: '30.5'
    }
  },
  5: {
    id: 5,
    mainPicture: publicDir + "/clothing-items/main5.png",
    otherPicture: [
      publicDir + "/clothing-items/5-1.png",
      publicDir + "/clothing-items/5-2.png",
    ],
    name: 'PacSun Shorts',
    des: "Distressed/ dirty denim. 5 pockets. High-rise. Pre-loved but still in great condition.",
    used: "like-new",
    price: 6,
    size: '25',
    measurements: {
      waist: '25',
      length: null,
      inseam: '2'
    }
  },
  6: {
    id: 6,
    mainPicture: publicDir + "/clothing-items/main6.png",
    otherPicture: [
      publicDir + "/clothing-items/6-1.png",
      publicDir + "/clothing-items/6-2.png",
    ],
    name: 'Nike Leggings',
    des: "Size small. Heather gray color, soft & stretchy material. Nike Swoosh design on the side of the left calf. Foldable waistband to show \"Just Do It\" print. Pre-loved, just does not fit me like I want anymore.",
    used: "like-new",
    price: 10,
    size: 'small',
    measurements: {
      waist: '23',
      inseam: '2',
      legOpening: '3.75'
    }
  },
  7: {
    id: 7,
    mainPicture: publicDir + "/clothing-items/main7.png",
    otherPicture: [
      publicDir + "/clothing-items/7-1.png",
      publicDir + "/clothing-items/7-2.png",
      publicDir + "/clothing-items/7-3.png",
      publicDir + "/clothing-items/7-4.png",
    ],
    name: 'Chic Shorts',
    des: "Distressed black shorts. 5 pockets. Size is not shown on the tag, but I am usually a size small in shorts. Pre-loved, just haven't used it in a while. ",
    used: "like-new",
    price: 5,
    measurements: {
      waist: '24',
      inseam: '4',
    }
  },
};

export default cards;
