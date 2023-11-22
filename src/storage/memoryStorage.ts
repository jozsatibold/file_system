import {Storage} from "./storage.interface";

export class MemoryStorage implements Storage {
  private contentMap: Map<string, string> = new Map();
  read(key: string): string | undefined {
    return this.contentMap.get(key);
  }

  write(key: string, content: string): void {
    this.contentMap.set(key, content);
  }

  exists(key: string): boolean {
    return this.contentMap.has(key);
  }
}