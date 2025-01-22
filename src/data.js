const alphabets = [
  {
    name: 'a',
    pronounce: 'a',
    style: {
      upper: 'A',
      lower: 'a',
    },
    examples: [
      {
        img: 'images/chicken.png',
        title: 'Ayam',
      },
    ],
  },
  {
    name: 'be',
    pronounce: 'bé',
    style: {
      upper: 'B',
      lower: 'b',
    },
    examples: [
      {
        img: 'images/pillow.png',
        title: 'Bantal',
      },
    ],
  },
  {
    name: 'ce',
    pronounce: 'cé',
    style: {
      upper: 'C',
      lower: 'c',
    },
    examples: [
      {
        img: 'images/hoe.png',
        title: 'Cangkul',
      },
    ],
  },
  {
    name: 'de',
    pronounce: 'dé',
    style: {
      upper: 'D',
      lower: 'd',
    },
    examples: [
      {
        img: 'images/leaf.png',
        title: 'Daun',
      },
    ],
  },
  {
    name: 'e',
    pronounce: 'é',
    style: {
      upper: 'E',
      lower: 'e',
    },
    examples: [
      {
        img: 'images/eagle.png',
        title: 'Elang',
      },
    ],
  },
  {
    name: 'ef',
    pronounce: 'éf',
    style: {
      upper: 'F',
      lower: 'f',
    },
    examples: [
      {
        img: 'images/photo-gallery.png',
        title: 'Foto',
      },
    ],
  },
  {
    name: 'ge',
    pronounce: 'gé',
    style: {
      upper: 'G',
      lower: 'g',
    },
    examples: [
      {
        img: 'images/elephant.png',
        title: 'Gajah',
      },
    ],
  },
  {
    name: 'ha',
    pronounce: 'ha',
    style: {
      upper: 'H',
      lower: 'h',
    },
    examples: [
      {
        img: 'images/towel.png',
        title: 'Handuk',
      },
    ],
  },
  {
    name: 'i',
    pronounce: 'i',
    style: {
      upper: 'I',
      lower: 'i',
    },
    examples: [
      {
        img: 'images/broom.png',
        title: 'Ijuk',
      },
    ],
  },
  {
    name: 'je',
    pronounce: 'jé',
    style: {
      upper: 'J',
      lower: 'j',
    },
    examples: [
      {
        img: 'images/suit.png',
        title: 'Jas',
      },
    ],
  },
  {
    name: 'ka',
    pronounce: 'ka',
    style: {
      upper: 'K',
      lower: 'k',
    },
    examples: [
      {
        img: 'images/chalk.png',
        title: 'Kapur',
      },
    ],
  },
  {
    name: 'el',
    pronounce: 'él',
    style: {
      upper: 'L',
      lower: 'l',
    },
    examples: [
      {
        img: 'images/light-bulb.png',
        title: 'Lampu',
      },
    ],
  },
  {
    name: 'em',
    pronounce: 'ém',
    style: {
      upper: 'M',
      lower: 'm',
    },
    examples: [
      {
        img: 'images/car.png',
        title: 'Mobil',
      },
    ],
  },
  {
    name: 'en',
    pronounce: 'én',
    style: {
      upper: 'N',
      lower: 'n',
    },
    examples: [
      {
        img: 'images/rice.png',
        title: 'Nasi',
      },
    ],
  },
  {
    name: 'o',
    pronounce: 'o',
    style: {
      upper: 'O',
      lower: 'o',
    },
    examples: [
      {
        img: 'images/torch.png',
        title: 'Obor',
      },
    ],
  },
  {
    name: 'pe',
    pronounce: 'pé',
    style: {
      upper: 'P',
      lower: 'p',
    },
    examples: [
      {
        img: 'images/beach.png',
        title: 'Pantai',
      },
    ],
  },
  {
    name: 'ki',
    pronounce: 'ki',
    style: {
      upper: 'Q',
      lower: 'q',
    },
    examples: [
      {
        img: 'images/quran.png',
        title: "Qur'an",
      },
    ],
  },
  {
    name: 'er',
    pronounce: 'ér',
    style: {
      upper: 'R',
      lower: 'r',
    },
    examples: [
      {
        img: 'images/chain.png',
        title: 'Rantai',
      },
    ],
  },
  {
    name: 'es',
    pronounce: 'és',
    style: {
      upper: 'S',
      lower: 's',
    },
    examples: [
      {
        img: 'images/belt.png',
        title: 'Sabuk',
      },
    ],
  },
  {
    name: 'te',
    pronounce: 'té',
    style: {
      upper: 'T',
      lower: 't',
    },
    examples: [
      {
        img: 'images/rope.png',
        title: 'Tali',
      },
    ],
  },
  {
    name: 'u',
    pronounce: 'u',
    style: {
      upper: 'U',
      lower: 'u',
    },
    examples: [
      {
        img: 'images/sweet-potato.png',
        title: 'Ubi',
      },
    ],
  },
  {
    name: 've',
    pronounce: 'vé',
    style: {
      upper: 'V',
      lower: 'v',
    },
    examples: [
      {
        img: 'images/vase.png',
        title: 'Vas',
      },
    ],
  },
  {
    name: 'we',
    pronounce: 'wé',
    style: {
      upper: 'W',
      lower: 'w',
    },
    examples: [
      {
        img: 'images/color-palette.png',
        title: 'Warna',
      },
    ],
  },
  {
    name: 'eks',
    pronounce: 'éks',
    style: {
      upper: 'X',
      lower: 'x',
    },
    examples: [
      {
        img: 'images/xylophone.png',
        title: 'Xilofon',
      },
    ],
  },
  {
    name: 'ye',
    pronounce: 'yé',
    style: {
      upper: 'Y',
      lower: 'y',
    },
    examples: [
      {
        img: 'images/yoga-pose.png',
        title: 'Yoga',
      },
    ],
  },
  {
    name: 'zet',
    pronounce: 'zét',
    style: {
      upper: 'Z',
      lower: 'z',
    },
    examples: [
      {
        img: 'images/zebra.png',
        title: 'Zebra',
      },
    ],
  },
];
