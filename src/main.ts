import {FileSystem} from "./file/file.interface";
import FS from "./file/fs";

function main() {
  const fs: FileSystem = new FS('./topdir');
  fs.store('filename1', 'a very long string1');
  fs.store('filename2', 'a very long string1');
  fs.store('filename3', 'a very long string3');
  fs.store('filename2', 'a very long string3');

  const result1 = fs.get('filename1');
  const result2 = fs.get('filename2');
  const result3 = fs.get('filename3');

  console.log('result1:', result1);
  console.log('result2:', result2);
  console.log('result3:', result3);
}

main();