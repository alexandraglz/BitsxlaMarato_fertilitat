const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('text/csv')) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos CSV'));
    }
  },
}).single('csvFile');

app.post('/api/check-fertility', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const csvFileBuffer = req.file.buffer;
      const csvContent = csvFileBuffer.toString('utf-8');
  
      const formData = req.body;
      const combinedData = {
        csvContent: csvContent,
        data: formData,
      };

      const result = await callPythonScript(combinedData);
      res.json(result);
    } catch (error) {
      console.error('Error en el servidor:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
});

function callPythonScript(data) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python3', ['check_fertility_model.py']);
    let result = '';

    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stdout.on('end', () => {
      try {
        const parsedResult = JSON.parse(result);
        resolve(parsedResult);
      } catch (error) {
        console.error('Error al parsear la respuesta JSON:', error.message);
        reject({ error: 'Error al procesar la respuesta del script de Python' });
      }
    });

    pythonProcess.on('error', (error) => {
      console.error('Error al ejecutar el script de Python:', error);
      reject({ error: 'Error al ejecutar el script de Python' });
    });

    pythonProcess.on('close', (code) => {
      console.log(`Proceso de Python cerrado con código de salida ${code}`);
    });

    pythonProcess.stdin.write(JSON.stringify(data));
    pythonProcess.stdin.end();
  });
}

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
