import fs from 'fs/promises';
import path from 'path';

export async function getContent(language: string = 'en') {
  const filePath = path.join(process.cwd(), 'public', 'data', `content.${language}.json`);
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
