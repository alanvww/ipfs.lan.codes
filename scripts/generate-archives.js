import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const archivesDir = path.join(__dirname, '../public/archives');
const outputFile = path.join(__dirname, '../public/index.json');

fs.readdir(archivesDir, (err, files) => {
	if (err) {
		console.error('Error reading archives directory:', err);
		return;
	}

	const archives = files.map((file) => ({
		name: file.replace(/-/g, ' ').replace(/\..+$/, ''), // Format file name as title
		url: `/archives/${file}`,
	}));

	fs.writeFile(outputFile, JSON.stringify(archives, null, 2), (err) => {
		if (err) {
			console.error('Error writing archives JSON:', err);
			return;
		}

		console.log('Archives JSON generated successfully.');
	});
});
