export interface ProductModel extends Rating {
  title: string;
  image: string;
  rate: number;
  count: number;
  description: string;
  price: number;
  rating: Rating;
  category?: string;
  id: number;
  quantity: number;
}

export interface Rating {
  count: number;
  rate: number;
}
