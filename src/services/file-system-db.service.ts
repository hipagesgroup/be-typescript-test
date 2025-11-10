import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import { DbExample } from '../models/db-example.model';

@Injectable()
export class FileSystemDbService {
  private readonly dataFilePath: string;

  constructor() {
    this.dataFilePath = path.join(process.cwd(), 'data', 'dbExamples.json');
  }

  async save(example: DbExample): Promise<void> {
    const examples = await this.getAll();

    // Remove existing item with same ID if it exists
    const filteredExamples = examples.filter((x) => x.id !== example.id);

    // Add the new/updated item
    filteredExamples.push(example);

    // Ensure the data directory exists
    const dataDirectory = path.dirname(this.dataFilePath);
    await fs.mkdir(dataDirectory, { recursive: true });

    // Write back to file
    const json = JSON.stringify(filteredExamples, null, 2);
    await fs.writeFile(this.dataFilePath, json, 'utf-8');
  }

  async get(): Promise<DbExample[]> {
    return await this.getAll();
  }

  private async getAll(): Promise<DbExample[]> {
    try {
      const fileExists = await fs
        .access(this.dataFilePath)
        .then(() => true)
        .catch(() => false);

      if (!fileExists) {
        return [];
      }

      const json = await fs.readFile(this.dataFilePath, 'utf-8');

      if (!json || json.trim() === '') {
        return [];
      }

      return JSON.parse(json) as DbExample[];
    } catch (error) {
      return [];
    }
  }
}
