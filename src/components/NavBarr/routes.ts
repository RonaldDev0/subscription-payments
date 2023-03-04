interface page {
  name: string
  path: string
}

export const pages: page[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Prebuild Checkout',
    path: '/prebuild'
  },
  {
    name: 'Custom Checkout',
    path: '/custom'
  }
]
