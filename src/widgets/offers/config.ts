export const OFFERS_DATA = [
  {
    title: 'Move the borders of reality!',
    description: "Go on a space adventure - it's possible with us!",
    images: {
      src: require('./images/card-1.jpg'),
      src2x: require('./images/card-1@2x.jpg'),
    },
  },
  {
    title: 'Space is not just stars and planets',
    description: 'Go on a space adventure',
    images: {
      src: require('./images/card-2.jpg'),
      src2x: require('./images/card-2@2x.jpg'),
    },
  },
  {
    title: 'For those who dream of stars ',
    description: 'Our offer: make your dream come true',
    images: {
      src: require('./images/card-3.jpg'),
      src2x: require('./images/card-3@2x.jpg'),
    },
  },
  {
    title: 'Fulfill your fantastic dreams',
    description: 'Space has never been so close',
    images: {
      src: require('./images/card-4.jpg'),
      src2x: require('./images/card-4@2x.jpg'),
    },
  },
] as const

export type IOffer = (typeof OFFERS_DATA)[number]
