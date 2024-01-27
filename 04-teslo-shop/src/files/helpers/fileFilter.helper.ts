/* eslint-disable @typescript-eslint/ban-types */
import { FileFilterCallback } from 'multer';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) => {
  if (!file) {
    return callback(null, false);
  }

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  if (validExtensions.includes(fileExtension)) {
    // Si la extensión es válida, permitir el archivo
    return callback(null, true);
  } else {
    // Si la extensión no es válida, rechazar el archivo
    callback(null, false);
  }
};
