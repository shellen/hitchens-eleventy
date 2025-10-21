// ABOUTME: Build script that compiles CSS based on the configured framework
// ABOUTME: Reads css_framework from _data/site.json and runs appropriate build command
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const siteConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '_data', 'site.json'), 'utf-8')
);

const framework = siteConfig.css_framework || 'tailwind';

console.log(`Building CSS using ${framework}...`);

try {
  if (framework === 'tailwind') {
    execSync(
      'npx tailwindcss -i ./assets/css/tailwind.css -o ./_site/assets/css/main.css',
      { stdio: 'inherit' }
    );
  } else if (framework === 'scss') {
    execSync(
      'sass --load-path=_sass assets/css/main.scss _site/assets/css/main.css',
      { stdio: 'inherit' }
    );
  } else {
    console.error(`Unknown CSS framework: ${framework}`);
    console.error('Valid options are "tailwind" or "scss"');
    process.exit(1);
  }
  console.log('CSS build complete!');
} catch (error) {
  console.error('CSS build failed:', error.message);
  process.exit(1);
}
