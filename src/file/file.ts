export interface FileSystem {

  store(filename: string, content: string): void;

  get(filename: string): File | undefined;
}