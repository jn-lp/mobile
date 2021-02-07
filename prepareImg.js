const fs = require("fs");

fs.writeFileSync(
  "./assets/Posters/index.ts",
  "export default " +
    "{\n" +
    fs
      .readdirSync("./assets/Posters")
      .filter((x) => x.includes("jpg"))
      .map((x) => `"${x}": require("./${x}"),`)
      .join("\n") +
    "}"
);
