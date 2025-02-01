export const getCardSize = (cardNumber: number): 'm' | 'l' => {
  if (cardNumber % 3 === 1) return 'l'

  return 'm'
}
