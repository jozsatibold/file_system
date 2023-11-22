import {Storage} from "./storage.interface";
import * as fs from "fs";

export class LocalStorage implements Storage {
  read(filePath: string): string | undefined {
    const file = fs.readFileSync(filePath, 'utf8');
    return file;
  }

  write(filePath: string, content: string): void {
    // Update the file-content mapping
    fs.writeFileSync(filePath, content);
  }

  exists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }
}