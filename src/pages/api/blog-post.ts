import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data/notes');

  // Read the json data file data.json
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, '2023-05-01-Paddle-API.json'),
    'utf8',
  );

  const data = JSON.parse(fileContents);
  console.log(data.slug);

  // Return the content of the data file in json format
  res.status(200).json(data);
}
