import { useState } from 'react';
// import { useQuery } from 'react-query';
// // Components
// import Product from '../components/Product';
// import Cart from '../components/Cart';
// import Drawer from '@material-ui/core/Drawer';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Grid from '@material-ui/core/Grid';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Badge from '@material-ui/core/Badge';
// import Button from '@material-ui/core/Button';


// // const getProducts = async (): Promise<CartProductType[]> =>
// //   await (await fetch('https://fakestoreapi.com/products')).json();

// const App = () => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartProducts, setCartProducts] = useState([] as CartProductType[]);
//   // const { data, isLoading, error } = useQuery<CartProductType[]>(
//   //   'products',
//   //   getProducts
//   // );
//   // console.log(data);

//   const getTotalProducts = (products: CartProductType[]) =>
//     products.reduce((ack: number, product) => ack + product.amount, 0);

//   const handleAddToCart = (clickedProduct: CartProductType) => {
//     setCartProducts(prev => {
//       // 1. Is the product already added in the cart?
//       const isProductInCart = prev.find(product => product.id === clickedProduct.id);

//       if (isProductInCart) {
//         return prev.map(product =>
//           product.id === clickedProduct.id
//             ? { ...product, amount: product.amount + 1 }
//             : product
//         );
//       }
//       // First time the product is added
//       return [...prev, { ...clickedProduct, amount: 1 }];
//     });
//   };

//   const handleRemoveFromCart = (id: number) => {
//     setCartProducts(prev =>
//       prev.reduce((ack, product) => {
//         if (product.id === id) {
//           if (product.amount === 1) return ack;
//           return [...ack, { ...product, amount: product.amount - 1 }];
//         } else {
//           return [...ack, product];
//         }
//       }, [] as CartProductType[])
//     );
//   };

//   // if (isLoading) return <LinearProgress />;
//   // if (error) return <div>Something went wrong ...</div>;

//   return (
//     <>
//       <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
//         <Cart
//           cartProducts={cartProducts}
//           addToCart={handleAddToCart}
//           removeFromCart={handleRemoveFromCart}
//         />
//       </Drawer>
//       <Button onClick={() => setCartOpen(true)}>
//         <Badge badgeContent={getTotalProducts(cartProducts)} color='error'>
//           <AddShoppingCartIcon />
//         </Badge>
//       </Button>
//       {/* <Grid container spacing={3}>
//         {data?.map(product => (
//           <Grid product key={product.id} xs={12} sm={4}>
//             <Product product={product} handleAddToCart={handleAddToCart} />
//           </Grid>
//         ))}
//       </Grid> */}
//     </>
//   );
// };

// export default App;
