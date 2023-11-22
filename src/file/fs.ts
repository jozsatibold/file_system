import {FileSystem} from "./file";
class FS implements FileSystem {

  private directory: string;

  constructor(directory: string) {
    this.directory = directory;
  }

  store(filename: string, content: string): void {
  }

  get(filename: string): File | undefined {
    return undefined;
  }
}