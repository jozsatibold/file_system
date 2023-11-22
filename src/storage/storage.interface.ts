export interface Storage {
  write(filePath: string, content: string): void;

  read(filePath: string): string | undefined;

  exists(filePath: string): boolean;
}