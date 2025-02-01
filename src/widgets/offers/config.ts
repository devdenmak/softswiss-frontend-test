export const OFFERS_DATA = [
  {
    title: 'Move the borders of reality!',
    description: "Go on a space adventure - it's possible with us!",
  },
  {
    title: 'Space is not just stars and planets',
    description: 'Go on a space adventure',
  },
  {
    title: 'For those who dream of stars ',
    description: 'Our offer: make your dream come true',
  },
  {
    title: 'Fulfill your fantastic dreams',
    description: 'Space has never been so close',
  },
] as const

export type IOffer = (typeof OFFERS_DATA)[number]
