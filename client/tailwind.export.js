const fs = require("fs");
const path = require("path");
const TailwindConfig = require("./tailwind.quizdini.js");
const colors = TailwindConfig.theme.colors;
const outPath = path.join(__dirname, "src", "styles", "theme-variables.scss");

// If the file exists, delete it.
fs.unlink(outPath, (err) => {
  if (err && err.code !== "ENOENT") return console.error(err);

  Object.keys(colors).forEach((key) => {
    // colors from Tailwind
    let vars = "";
    if (typeof colors[key] == "object") {
      Object.keys(colors[key]).forEach((shade) => {
        vars +=
          shade === "DEFAULT"
            ? `$${key}: ${colors[key][shade]};\n`
            : `$${key}-${shade}: ${colors[key][shade]};\n`;
      });
    } else {
      vars += `$${key}: ${colors[key]};\n`;
    }

    fs.appendFile(outPath, vars, (err) => {
      if (err) return console.error(err);
    });
  });
});
