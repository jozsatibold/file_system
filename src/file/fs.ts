import {FileSystem} from "./file.interface";
import {LocalStorage} from "../storage/localStorage";
import {createHash} from "crypto";
import {Storage} from "../storage/storage.interface";
import {MemoryStorage} from "../storage/memoryStorage";
class FS implements FileSystem {

  private readonly memoryStore: Storage = new MemoryStorage();

  private readonly bucket: Storage = new LocalStorage();

  private readonly directory: string;

  constructor(directory: string) {
    this.directory = directory;
  }

  store(filename: string, content: string): void {
    const hash = this._hash(content);
    if (!this.memoryStore.exists(hash)) {
      const realPath = this._getPath(hash);
      try {
        this.bucket.write(realPath, content);
      } catch (error: any) {
        console.error(`Failed to write content to file: ${error.message}`);
      }
      this.memoryStore.write(hash, realPath);
    }
    const filePath = this._getPath(filename)
    // Update the file-content mapping
    this.bucket.write(filePath , hash);
  }

  get(filename: string): String | undefined {
    const filePath = this._getPath(filename);
    const hash = this.bucket.read(filePath);
    if (!hash) {
      return undefined;
    }

    const realFilePath = this._getPath(hash);
    const content = this.bucket.read(realFilePath);
    return content;
  }

  _getPath = (filename: string) => `${this.directory}/${filename}`;

  _hash = (content: string) => createHash('md5').update(content).digest('hex');
}

export default FS;