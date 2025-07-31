
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button, Drawer, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
  const [open, setOpen] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)} variant="outlined" sx={{ position: 'relative' }}>
        <ShoppingCart />
        Cart
        {items.length > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: -8,
              right: -8,
              bgcolor: 'red.600',
              color: 'white',
              fontSize: '0.75rem',
              borderRadius: '50%',
              height: 20,
              width: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {items.length}
          </Box>
        )}
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Your Order</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            {items.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: 'center', color: 'gray.500' }}>
                Your cart is empty
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map((item, index) => (
                  <Box key={index} sx={{ borderBottom: 1, borderColor: 'divider', pb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>{item.name}</Typography>
                    {item.toppings.length > 0 && (
                      <Typography variant="body2" sx={{ color: 'gray.500' }}>
                        Extra toppings: {item.toppings.join(", ")}
                      </Typography>
                    )}
                    <Typography variant="body1" sx={{ textAlign: 'right', fontWeight: 'medium' }}>${item.price.toFixed(2)}</Typography>
                  </Box>
                ))}
                <Box sx={{ pt: 2 }}>
                  <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </Typography>
                </Box>
                <Button onClick={onCheckout} variant="contained" color="primary" sx={{ mt: 2, width: '100%', bgcolor: '#dc2626', '&:hover': { bgcolor: '#b91c1c' } }}>
                  Proceed to Checkout
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
