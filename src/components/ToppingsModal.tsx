
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';

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
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Customize Your Pizza</DialogTitle>
      <DialogContent dividers>
        <div className="grid gap-4 py-4">
          {AVAILABLE_TOPPINGS.map((topping) => (
            <FormControlLabel
              key={topping.id}
              control={
                <Checkbox
                  checked={selectedToppings.includes(topping.id)}
                  onChange={() => handleToppingChange(topping.id)}
                  name={topping.id}
                />
              }
              label={
                <Typography className="flex-1">
                  {topping.name}
                  <span className="text-sm text-gray-500 ml-2">+${topping.price.toFixed(2)}</span>
                </Typography>
              }
            />
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => onConfirm(selectedToppings)} variant="contained" color="primary" sx={{ bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}>
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToppingsModal;
