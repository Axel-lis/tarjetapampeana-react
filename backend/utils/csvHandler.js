import fs from 'fs';
import csv from 'csv-parser';
import VariablesTarj from '../models/VariablesTarj.js';

const csvFilePath = '/home/tarjetap/tarjetapampeana.com.ar/fernando/variables_tarj.csv';

export const processCSV = async () => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          // Truncate de la tabla antes de insertar los nuevos registros
          await VariablesTarj.destroy({ where: {}, truncate: true });

          if (results.length > 0) {
            // Inserción masiva en la base de datos
            await VariablesTarj.bulkCreate(results);
            console.log(`Proceso completado. Se procesaron ${results.length} filas.`);
          } else {
            console.log('El archivo CSV está vacío o no tiene datos válidos.');
          }
          resolve(); // Indicar que el proceso terminó correctamente
        } catch (error) {
          console.error('Error al insertar en la base de datos:', error);
          reject(error);
        }
      })
      .on('error', (error) => {
        console.error('Error al leer el archivo CSV:', error);
        reject(error);
      });
  });
};
