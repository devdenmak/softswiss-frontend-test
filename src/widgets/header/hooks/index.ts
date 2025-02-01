export const useNavigation = () => {
  return [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Products',
      href: '/',
    },
  ] as const
}
