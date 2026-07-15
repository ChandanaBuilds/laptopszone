export interface Laptop {
  id: string
  name: string
  brand: string
  category: 'gaming' | 'business' | 'student' | 'creator' | 'ultrabook'
  price: number
  originalPrice?: number
  specs: {
    processor: string
    ram: string
    storage: string
    graphics: string
    display: string
    battery: string
  }
  rating: number
  reviews: number
  image: string
  description: string
  inStock: boolean
  discount?: number
}

export interface Accessory {
  id: string
  name: string
  category: 'bags' | 'mice' | 'keyboards' | 'chargers' | 'stands' | 'cooling'
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  description: string
  inStock: boolean
  discount?: number
}

export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  featured: boolean
}

export interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  rating: number
  avatar: string
}

export interface EnquiryForm {
  name: string
  email: string
  phone: string
  productInterest: string
  message: string
}
