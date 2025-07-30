import React, { useState } from 'react';
import PizzaCard from '../components/PizzaCard';
import ToppingsModal from '../components/ToppingsModal';
import Cart from '../components/Cart';
import Logo from '../components/Logo';
import { useToast } from "@/components/ui/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  toppings: string[];
}

const PIZZAS = [
  {
    id: "margherita",
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    description: "Classic pepperoni with mozzarella and tomato sauce",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  },
];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<typeof PIZZAS[0] | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const handlePizzaSelect = (pizza: typeof PIZZAS[0]) => {
    setSelectedPizza(pizza);
    setSelectedToppings([]);
    setIsModalOpen(true);
  };

  const handleAddToCart = (toppings: string[]) => {
    if (selectedPizza) {
      const newItem: CartItem = {
        id: `${selectedPizza.id}-${Date.now()}`,
        name: selectedPizza.name,
        price: selectedPizza.price + toppings.length * 1.5, // $1.50 per topping
        toppings,
      };
      setCartItems([...cartItems, newItem]);
      setIsModalOpen(false);
      toast({
        title: "Added to cart!",
        description: `${selectedPizza.name} has been added to your cart.`,
      });
    }
  };

  const handleCheckout = () => {
    toast({
      title: "Coming soon!",
      description: "Checkout functionality will be implemented in the next version.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <Logo />
        <Cart items={cartItems} onCheckout={handleCheckout} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {PIZZAS.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            {...pizza}
            onSelect={() => handlePizzaSelect(pizza)}
          />
        ))}
      </div>

      {selectedPizza && (
        <ToppingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleAddToCart}
          selectedToppings={selectedToppings}
          setSelectedToppings={setSelectedToppings}
        />
      )}
    </div>
  );
};

export default Index;
