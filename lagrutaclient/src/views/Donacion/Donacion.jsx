import React from 'react';
import { Button, ButtonGroup, Box, Text } from '@chakra-ui/react'



const DonationForm = () => {
  const handleAnonymousDonation = () => {
    // Lógica para procesar una donación anónima
  };

  const handleLoginDonation = () => {
    // Lógica para procesar una donación con inicio de sesión
  };

  const handleConfirmationEmail = () => {
    // Lógica para enviar un correo de confirmación
  };

  const handlePaymentRedirect = () => {
    // Lógica para redireccionar al enlace de pago
  };

 

  return (
    <>
    <ButtonGroup>
      <Box>Donation Options</Box>
      <Button colorScheme='blue' onClick={handleAnonymousDonation}>Anonymous Donation</Button>
      <Button colorScheme='blue'  onClick={handleLoginDonation}>Donation with Login</Button>
      <Button colorScheme='blue' onClick={handleConfirmationEmail}>Send Confirmation Email</Button>
      <Button colorScheme='blue' onClick={handlePaymentRedirect}>Payment Redirect</Button>
    </ButtonGroup>
     
   </>
  );
};

export default DonationForm;
