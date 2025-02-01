export const getCardSize = (cardNumber: number): 'md' | 'lg' => {
  if (cardNumber % 3 === 1) return 'lg'

  return 'md' // маленькая
}
