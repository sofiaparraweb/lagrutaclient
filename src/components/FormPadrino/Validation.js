export const validateUsuario = (newUser) => {
  const errors = {};

  if (!newUser.name) {
    errors.name = 'Por favor ingresa un nombre';
  } else if (!/^[\w\s]{1,30}$/.test(newUser.name)) {
    errors.name = 'El nombre solo puede contener letras';
  }

  if (!newUser.phone) {
    errors.phone = 'Por favor ingresa un número de celular';
  } else if (!/^[0-9+]{1,14}$/.test(newUser.phone)) {
    errors.phone = 'Solo puede contener números';
  }

  if (!newUser.description) {
    errors.description = 'Por favor ingresa una descripción';
  } else if (!/^[\w\s!@#$%^&*,.?:\-\n]{1,120}$/.test(newUser.description)) {
    errors.description = 'Máximo 120 caracteres';
  }

  return errors;
};
