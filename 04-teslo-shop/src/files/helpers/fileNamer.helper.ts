import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: any,
) => {
  if (!file) {
    return callback('File is empty', false);
  }

  const fileExtension = file.mimetype.split('/')[1];

  // const fileName = `${new Date().getTime()}.${fileExtension}`; // Genera un código y guarda pero sobre escribe
  const fileName = `${uuid()}.${fileExtension}`; // Usando "uuid" para generar un nombre único. De esta forma si modifica en cada guardad el id de esa forma no se sobre escribe.

  callback(null, fileName);
};
