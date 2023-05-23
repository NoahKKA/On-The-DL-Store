const publicDir = process.env.PUBLIC_URL;

const cards = {
  1: {
    id: 1,
    mainPicture: publicDir + '/clothing-items/main1.jpg',
    otherPicture: [publicDir + '/clothing-items/1-1.jpg', publicDir + '/clothing-items/1-2.jpg'],
    des: "blah blah blah blah",
    used: "like-new"
  },
  2: {
    id: 2,
    mainPicture: publicDir + '/clothing-items/main2.jpg',
    otherPicture: [publicDir + '/clothing-items/2-1.jpg', publicDir + '/clothing-items/2-2.jpg'],
    des: "blah blah blah blah",
    used: "like-new"
  },
  3: {
    id:3,
    mainPicture: publicDir + '/clothing-items/main3.jpg',
    otherPicture: [publicDir + '/clothing-items/3-1.jpg', publicDir + '/clothing-items/3-2.jpg'],
    des: "blah blah blah blah",
    used: "like-new"
  }
};

export default cards;