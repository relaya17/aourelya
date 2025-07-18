
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CartItem {
  id: string;
  name: string;
  price: number;
  toppings: string[];
}

interface CartProps {
  items: CartItem[];
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="font-medium">{item.name}</h3>
                  {item.toppings.length > 0 && (
                    <p className="text-sm text-gray-500">
                      Extra toppings: {item.toppings.join(", ")}
                    </p>
                  )}
                  <p className="text-right font-medium">${item.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="pt-4">
                <p className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </p>
              </div>
              <Button onClick={onCheckout} className="w-full bg-red-600 hover:bg-red-700">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
