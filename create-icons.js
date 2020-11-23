const { execSync } = require("child_process");

console.log("Ready to generate RN icon font ⏰");

execSync(
  `fantasticon src/assets/icons/ --name IconsCourses -o src/assets/fonts/ -t ttf`
);

console.log("Font and glyph map created 🎉");
