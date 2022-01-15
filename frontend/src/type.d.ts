interface IProduct {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  rating: number;
  quantity: number;
}

type ProductProps = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  rating: number;
}


type ProductCardProp = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  rating: number;
  quantity: number;
  product: IProduct;
  handleAddToCart: (clickedproduct: IProduct) => void;
}


type CartProps = {
  cartProducts: IProduct[];
  addToCart: (clickedProduct: IProduct) => void;
  removeFromCart: (id: number) => void;
  getTotalProducts: (cartProducts) => void;
  handleAddToCart: (clickedProduct: IProduct) => void;
};

type AddToCartProps = {
  product: IProduct;
  handleAddToCart: (clickedProduct: IProduct) => void;
};

type Props = {
  product: IProduct;
  addToCart: (clickedProduct: IProduct) => void;
  removeFromCart: (id: number) => void;
};

interface IUser {
  id: number;
  email: string
  firstName: string
  lastName: string
  password: string
}


interface Nav {
  badgeContent?: ((current: number, total: number) => React.ReactNode) | undefined;
  cartProducts: IProduct[]
  getTotalProducts: (cartProducts) => number;
  setCartOpen: (value: React.SetStateAction<boolean>) => void
}