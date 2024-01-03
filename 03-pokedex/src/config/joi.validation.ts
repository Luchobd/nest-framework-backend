import * as Joi from 'joi';

// Valida y crea las variables de entorno necesarias para la ejecución del servidor. Si falla el .env pasa a los valores que tiene configurado el Joi por defecto.
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
