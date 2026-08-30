#!/usr/bin/env node
// build-appsail.js — sets APPSAIL_BUILD=1 then runs `next build`, then syncs standalone assets
// Used by `npm run build:appsail` so next.config.mjs enables output:'standalone'
// without needing the cross-env package.
const { spawnSync } = require('child_process');
const path = require('path');

const env = { ...process.env, APPSAIL_BUILD: '1' };
const cwd = __dirname;

console.log('[build-appsail] Building with APPSAIL_BUILD=1 (standalone output enabled)');

// Step 1: next build (postbuild runs automatically and cleans .next/cache)
const build = spawnSync('node', ['node_modules/.bin/next', 'build'], {
  stdio: 'inherit',
  env,
  cwd,
  shell: false,
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

// Step 2: Sync .next/static and public/ into .next/standalone (AppSail needs these)
console.log('[build-appsail] Syncing standalone assets...');
const sync = spawnSync('node', [path.join('scripts', 'sync-standalone-assets.js')], {
  stdio: 'inherit',
  env,
  cwd,
  shell: false,
});

process.exit(sync.status ?? 0);
