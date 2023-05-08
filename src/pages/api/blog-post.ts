import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory

  const jsonDirectory = path.join(process.cwd(), 'data/notes');

  //Read the json data file data.json

  const fileContents = await fs.readFile(
    jsonDirectory + '/2023-05-01-Paddle-API.jsx',
    'utf8',
  );

  //Return the content of the data file in json format

  res.status(200).json(fileContents);

  console.log(fileContents);
}
