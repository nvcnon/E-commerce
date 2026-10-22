export interface Product {
  id?: string
  title?: string
  price?: string
  size1?: string
  size2?: string
  size3?: string
  description?: string
  category?: string
  image1?: string
  image2?: string
  colors?: Color[]
  size?: string
  size4?: string
  image3?: string
  image4?: string
  image?: string
}

export interface Color {
  name?: string
  hex?: string
}