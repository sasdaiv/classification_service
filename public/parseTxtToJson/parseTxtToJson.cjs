const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname);
fs.readdir(folderPath, (err, files) => {
	if (err) {
		console.error('Error reading directory:', err);
		return;
	}

	const txtFiles = files.filter((file) => path.extname(file) === '.txt'); //checking if .txt type

	txtFiles.forEach((txtFile) => {
		const txtFilePath = path.join(folderPath, txtFile);
		const jsonFileName = path.basename(txtFile, path.extname(txtFile)) + '.json'; //new file name
		const jsonFilePath = path.join(folderPath, jsonFileName); // new file path

		fs.readFile(txtFilePath, 'utf8', (err, data) => {
			//reading file
			if (err) {
				console.error('Error reading file:', txtFilePath);
				return;
			}

			const lines = data.trim().split('\n'); //split file for rows array
			const resultObject = { payload: { filters: {} }, rows: [] }; //payload is main data, and rows: array with objects

			// Iterate through lines to extract data
			lines.forEach((line, index) => {
				const [code, title] = line.split('\t');
				const codeLevels = code.split('_');
				const levelCount = codeLevels.length - 1;

				// Update payload for the first line
				if (index === 0) {
					resultObject.payload.maxLevel = levelCount;
					resultObject.payload.tab = codeLevels[0];
				}

				// Construct the JSON object
				const jsonObject = {
					code: code,
					title: title,
					show: true,
					level: findItemLevel(codeLevels),
				};

				// Add level properties dynamically
				for (let i = 1; i <= levelCount; i++) {
					jsonObject[`level${i}`] = codeLevels[i];
					// Initialize filter array if not present
					if (!resultObject.payload.filters[`level${i}`]) {
						resultObject.payload.filters[`level${i}`] = new Set();
					}
					// Add current level value to the filter array
					resultObject.payload.filters[`level${i}`].add(codeLevels[i]);
				}

				resultObject.rows.push(jsonObject); // Push the constructed object into rows array
			});

			// Convert Sets to Arrays
			for (const key in resultObject.payload.filters) {
				resultObject.payload.filters[key] = [...resultObject.payload.filters[key]];
			}

			// Write JSON data to a new .json file
			fs.writeFile(jsonFilePath, JSON.stringify(resultObject, null, 2), 'utf8', (err) => {
				if (err) {
					console.error('Error writing file:', jsonFilePath);
					return;
				}
				console.log('File converted:', jsonFilePath);
			});
		});
	});
});

const findItemLevel = (arr) => {
	const withoutPrefix = arr.slice(1);
	const findIndex = withoutPrefix.indexOf('00');
	return findIndex !== -1 ? findIndex : withoutPrefix.length;
};
