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

// interface ICart {
//   id: number;
//   name: string;
//   description: string;
//   img: string;
//   price: number;
//   rating: number;
//   quantity: number;
// }

type ProductCardProp = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  rating: number;
  quantity: number;
  // addToCart: (clickedProduct: IProduct) => void;
  // removeFromCart: (id: number) => void;
  product: IProduct;
  handleAddToCart: (clickedproduct: IProduct) => void;
}


// type IProduct = {
//   id: number;
//   name: string;
//   description: string;
//   img: string;
//   price: number;
//   rating: number;
//   quantity: number;
// };

type CartProps = {
  cartProducts: IProduct[];
  addToCart: (clickedProduct: IProduct) => void;
  removeFromCart: (id: number) => void;
};

type AddToCartProps = {
  product: IProduct;
  handleAddToCart: (clickedProduct: IProduct) => void;
};

interface IUser {
  id: number;
  email: string
  firstName: string
  lastName: string
  password: string
}