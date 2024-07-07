import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartButton = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Product A', price: 7000, quantity: 1 },
    { id: 2, name: 'Product B', price: 7000, quantity: 2 },
  ]);

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="w-[] border rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          
          
          <div className="w-[] flex justify-between mt-2">
           <button className="flex border-2 border-gray-500 rounded-3xl">
              <p className="text-black font-bold py-2 px-4 rounded mr-2"
              onClick={() => increaseQuantity(item.id)}> + </p>
            
            <p className="text-gray-600 pt-2">{item.quantity}</p>
            <p className="text-black font-bold py-2 px-4 rounded mr-2"
              onClick={() => decreaseQuantity(item.id)}> - </p>
</button>
        
            <p className="text-red-600 pt-2 text-xl font-medium"> <span>&#x20A6;</span>{item.price}</p>
          </div>
        </div>

        

      ))}
<div className='flex justify-end'>
<div className='-ml-3 p-2 '><a href=""><button className='border-2 px-8 py-3 rounded-3xl bg-green-600 text-white'> Buy Now</button></a>
            </div>
            </div>
    </div>
  );
};

export default CartButton;