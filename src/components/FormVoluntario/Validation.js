export const validateUsuario = (newUser, errors) => {
  const newErrors = { ...errors };

if (!newUser.name) {
  newErrors.name = 'Por favor ingresa un nombre';
} else if (!/^[\w\s]{1,30}$/.test(newUser.name)) {
  newErrors.name = 'El nombre solo puede contener letras, espacios y máximo 30 caracteres';
} else {
  newErrors.name = '';
}

if (!newUser.mail) {
  newErrors.mail = 'Por favor ingresa un correo electrónico';
} else if (!/\S+@\S+\.\S+/.test(newUser.mail)) {
  newErrors.mail = 'Por favor ingresa un correo electrónico válido';
} else {
  newErrors.mail = '';
}

  // Validar el campo número celular
  if (!newUser.phone) {
    newErrors.phone = 'Por favor ingresa un número de celular';
  } else if (!/^[0-9+]{1,14}$/.test(newUser.phone)) {
    newErrors.phone = 'El número de celular solo puede contener números y el símbolo + y máximo 14 dígitos';
  } else {
    newErrors.phone = '';
  }

// Validar el campo descripción
if (!newUser.description) {
  newErrors.description = 'Por favor ingresa una descripción';
} else if (!/^[\w\s!@#$%^&*,.?:\-\n]{1,120}$/.test(newUser.description)) {
  newErrors.description = 'La descripción solo puede contener letras, símbolos y máximo 120 caracteres';
} else {
  newErrors.description = '';
}


  return newErrors;
};
