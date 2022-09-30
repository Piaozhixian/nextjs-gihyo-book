// 商品のカテゴリ
export Category = 'shoes' | 'clothes' | 'book'
// 商品の状態
export Condition = 'new' | 'used'

// ユーザー
export User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

// 商品
export Product = {
  id: number
  category: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

// API Context
export ApiContext = {
  apiRootUrl: string
}