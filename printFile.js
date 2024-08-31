// printFile.js

import { readFile } from 'fs/promises'; // Usamos fs/promises para promesas en lugar de callbacks
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileName = join(__dirname, 'Macintosh.txt');

async function readFileAsync() {
    try {
        const data = await readFile(fileName, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(`Error  ${err.message}`);
        process.exit(1);
    }
}

readFileAsync();
