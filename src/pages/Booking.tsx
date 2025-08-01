import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Paper, // Import Paper for card styling
  Snackbar, // Import Snackbar for user messages
  Alert, // Import Alert for Snackbar content
} from '@mui/material';

type FormData = {
  fullName: string;
  phone: string;
  email?: string;
  apartmentType: string;
  rooms: string;
  moveDate: string;
  fromAddress: string;
  fromFloor?: number;
  fromElevator: boolean;
  fromLift: boolean;
  toAddress: string;
  toFloor?: number;
  toElevator: boolean;
  toLift: boolean;
};

const MoveEstimateForm: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const { control, handleSubmit, watch, formState: { errors }, trigger } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      phone: '',
    email: '',
      apartmentType: '',
      rooms: '',
      moveDate: '',
      fromAddress: '',
      fromFloor: undefined,
      fromElevator: false,
      fromLift: false,
      toAddress: '',
      toFloor: undefined,
      toElevator: false,
      toLift: false,
    }
  });
  const [activeStep, setActiveStep] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const steps = [
    t('booking.steps.personalDetails'),
    t('booking.steps.apartmentDate'),
    t('booking.steps.addresses'),
    t('booking.steps.itemList'),
    t('booking.steps.summary'),
  ];

  const apartmentTypes = [
    t('booking.apartmentTypes.apartment'),
    t('booking.apartmentTypes.privateHouse'),
    t('booking.apartmentTypes.gardenApartment'),
    t('booking.apartmentTypes.penthouse'),
    t('booking.apartmentTypes.other'),
  ];
  const roomsOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'];

  const onNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (activeStep) {
      case 0:
        fieldsToValidate = ['fullName', 'phone', 'email'];
        break;
      case 1:
        fieldsToValidate = ['apartmentType', 'rooms', 'moveDate'];
        break;
      case 2:
        fieldsToValidate = [
          'fromAddress',
          'toAddress',
        ];
        break;
    }

    const valid = await trigger(fieldsToValidate);
    if (!valid) return;

    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const onBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log('Submitted Data:', data);
    setSnackbarMessage(t('booking.success'));
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    // alert('הטופס נשלח בהצלחה!'); // Replaced with Snackbar
    // Optionally reset form here or handle actual submission
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure it takes full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        bgcolor: 'background.default', // Consistent background
      }}
    >
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Paper
          elevation={6} // Consistent shadow for card styling
          sx={{
            p: { xs: 3, sm: 5, md: 8 },
            borderRadius: 3,
            bgcolor: 'background.paper',
            mx: 'auto',
            width: '100%',
            textAlign: 'right', // Default text alignment for Hebrew/RTL
          }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
            {t('booking.title')}
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {activeStep === 0 && (
              <Box display="flex" flexDirection="column" gap={2}>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: t('booking.validation.fullNameRequired') }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('booking.name')}
                      required
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                      autoFocus
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: t('booking.validation.phoneRequired'),
                    pattern: {
                      value: /^05\d{8}$/,
                      message: t('booking.validation.invalidPhone'),
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('booking.phone')}
                      required
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      inputProps={{ inputMode: 'tel' }}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: t('booking.validation.invalidEmail'),
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('booking.email')}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      type="email"
                    />
                  )}
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box display="flex" flexDirection="column" gap={2}>
                <Controller
                  name="apartmentType"
                  control={control}
                  rules={{ required: t('booking.validation.apartmentTypeRequired') }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label={t('booking.apartmentType')}
                      required
                      error={!!errors.apartmentType}
                      helperText={errors.apartmentType?.message}
                    >
                      {apartmentTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
                <Controller
                  name="rooms"
                  control={control}
                  rules={{ required: t('booking.validation.roomsRequired') }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label={t('booking.rooms')}
                      required
                      error={!!errors.rooms}
                      helperText={errors.rooms?.message}
                    >
                      {roomsOptions.map((room) => (
                        <MenuItem key={room} value={room}>
                          {room}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
                <Controller
                  name="moveDate"
                  control={control}
                  rules={{ required: t('booking.validation.moveDateRequired') }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('booking.moveDate')}
                      type="date"
                      InputLabelProps={{ shrink: true }}
          required
                      error={!!errors.moveDate}
                      helperText={errors.moveDate?.message}
                    />
                  )}
                />
              </Box>
            )}

            {activeStep === 2 && (
              <Box display="flex" flexDirection="column" gap={3}>
                <Typography variant="h6">{t('booking.currentAddress')}</Typography>
                <Controller
                  name="fromAddress"
                  control={control}
                  rules={{ required: t('booking.validation.fromAddressRequired') }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('booking.fullAddress')}
          required
                      error={!!errors.fromAddress}
                      helperText={errors.fromAddress?.message}
                    />
                  )}
                />
                <Controller
                  name="fromFloor"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label={t('booking.floor')} type="number" inputProps={{ min: 0 }} />
                  )}
                />
                <Controller
                  name="fromElevator"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox checked={field.value} onChange={e => field.onChange(e.target.checked)} />}
                      label={t('booking.hasElevator')}
                    />
                  )}
                />
                <Controller
                  name="fromLift"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox checked={field.value} onChange={e => field.onChange(e.target.checked)} />}
                      label={t('booking.needsLift')}
                    />
                  )}
                />

                <Typography variant="h6" sx={{ mt: 2 }}>{t('booking.destinationAddress')}</Typography>
                <Controller
                  name="toAddress"
                  control={control}
                  rules={{ required: t('booking.validation.toAddressRequired') }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={t('booking.fullAddress')}
          required
                      error={!!errors.toAddress}
                      helperText={errors.toAddress?.message}
                    />
                  )}
                />
                <Controller
                  name="toFloor"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label={t('booking.floor')} type="number" inputProps={{ min: 0 }} />
                  )}
                />
                <Controller
                  name="toElevator"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox checked={field.value} onChange={e => field.onChange(e.target.checked)} />}
                      label={t('booking.hasElevator')}
                    />
                  )}
                />
                <Controller
                  name="toLift"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox checked={field.value} onChange={e => field.onChange(e.target.checked)} />}
                      label={t('booking.needsLift')}
                    />
                  )}
                />
              </Box>
            )}

            {activeStep === 3 && (
              <Box>
                <Typography variant="body1" textAlign="center" color="text.primary" p={2}> {/* Changed color to text.primary */}
                  {t('booking.itemListPlaceholder')}
                </Typography>
              </Box>
            )}

            {activeStep === 4 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  {t('booking.summary')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t('booking.estimatedPrice')}: <strong>₪XXX</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('booking.summaryNote')}
                </Typography>
              </Box>
            )}

            <Box mt={4} display="flex" justifyContent="space-between">
              <Button
                disabled={activeStep === 0}
                variant="outlined"
                onClick={onBack}
                aria-label={t('booking.backButton')}
              >
                {t('booking.backButton')}
              </Button>
              {activeStep < steps.length - 1 ? (
                <Button variant="contained" onClick={onNext} aria-label={t('booking.nextButton')}>
                  {t('booking.nextButton')}
                </Button>
              ) : (
                <Button type="submit" variant="contained" aria-label={t('booking.submitButton')}>
                  {t('booking.submitButton')}
                </Button>
              )}
            </Box>
      </form>
        </Paper>
      </Container>
      {/* Snackbar for messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MoveEstimateForm;
