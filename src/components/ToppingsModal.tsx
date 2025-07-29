
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Topping {
  id: string;
  name: string;
  price: number;
}

interface ToppingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedToppings: string[]) => void;
  selectedToppings: string[];
  setSelectedToppings: (toppings: string[]) => void;
}

const AVAILABLE_TOPPINGS: Topping[] = [
  { id: "pepperoni", name: "Pepperoni", price: 2 },
  { id: "mushrooms", name: "Mushrooms", price: 1.5 },
  { id: "olives", name: "Olives", price: 1 },
  { id: "onions", name: "Onions", price: 1 },
  { id: "bell-peppers", name: "Bell Peppers", price: 1 },
  { id: "extra-cheese", name: "Extra Cheese", price: 2.5 },
];

const ToppingsModal: React.FC<ToppingsModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  selectedToppings,
  setSelectedToppings,
}) => {
  const handleToppingChange = (toppingId: string) => {
    setSelectedToppings(
      selectedToppings.includes(toppingId)
        ? selectedToppings.filter((id) => id !== toppingId)
        : [...selectedToppings, toppingId]
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Customize Your Pizza</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {AVAILABLE_TOPPINGS.map((topping) => (
            <div key={topping.id} className="flex items-center space-x-2">
              <Checkbox
                id={topping.id}
                checked={selectedToppings.includes(topping.id)}
                onCheckedChange={() => handleToppingChange(topping.id)}
              />
              <Label htmlFor={topping.id} className="flex-1">
                {topping.name}
              </Label>
              <span className="text-sm text-gray-500">+${topping.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={() => onConfirm(selectedToppings)} className="bg-red-600 hover:bg-red-700">
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ToppingsModal;
