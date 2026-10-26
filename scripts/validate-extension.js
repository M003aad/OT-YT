import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'manifest.json');
const errors = [];

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch (error) {
  console.error(`Unable to read or parse manifest.json: ${error.message}`);
  process.exit(1);
}

if (manifest.manifest_version !== 3) {
  errors.push('manifest.json must declare Manifest Version 3.');
}

const referencedFiles = new Set([
  ...Object.values(manifest.icons || {}),
  ...(manifest.content_scripts || []).flatMap((script) => script.js || []),
  ...(manifest.web_accessible_resources || []).flatMap((entry) => entry.resources || []),
]);

for (const reference of referencedFiles) {
  const resolved = path.resolve(root, reference);
  if (!resolved.startsWith(`${root}${path.sep}`) || !fs.existsSync(resolved)) {
    errors.push(`Manifest reference is missing or outside the project: ${reference}`);
  }
}

if (errors.length) {
  for (const error of errors) console.error(`Validation error: ${error}`);
  process.exit(1);
}

console.log(`Extension manifest is valid; checked ${referencedFiles.size} referenced files.`);
