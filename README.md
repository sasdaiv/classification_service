# Classification App "LVS1048" with Multileveled Tables(React + TypeScript + Vite);

This app allows you to manage multileveled tables for classification. Here's how you can change or add tables:

## Preparing Tables

1. Prepare a text file with the correct structure:

   - Each row (including the first row) should have "code" and "title" separated by a "tab" character.
   - Do not add any extra titles or other content, as it may break the parser.

2. Paste the prepared text file into the folder located here: `public/parseTxtToJson`.

## Converting Text Files to JSON

3. Run the `parseTxtToJson.cjs` file:

   - Open your terminal and navigate to the main app folder (`classification`).
   - Run the following command:
     ```
     node ./public/parseTxtToJson/parseTxtToJson.cjs
     ```

   If the prepared text file(s) have the correct structure, you will see them converted in the terminal:
   `File converted: /Users/...path_to_app/classification/public/parseTxtToJson/classification-be-lv.json`

`File converted: /Users/...path_to_app/classification/public/parseTxtToJson/classification-be-en.json`

New JSON files will be generated in the `public/parseTxtToJson` folder.

## Adding Tables to the Project

4. Move the generated JSON file(s) to the `TABLES` folder located in the application's public folder:

- Example for English table "BE": `public/TABLES/classification-be-en.json`

The naming convention for the JSON files follows the pattern "table_short-language.json" where:

- `table_short` represents the abbreviated table name (e.g., "be" for "BE"),
- `language` represents the language code (e.g., "en" for English, "lv" for Latvian).

This is all you need to do to add or update tables in the project.

You can add as many .txt files as you want to the `parseTxtToJson` folder, and the conversion script will convert them all to JSON. After converting, simply move the generated JSON files to the `TABLES` folder to make them available in the app.
