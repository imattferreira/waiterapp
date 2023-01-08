import fs from "node:fs";

export default Object.freeze({
  writeFile: fs.writeFileSync,
  exists: fs.existsSync,
  readdir: fs.readdirSync,
});
