#!/usr/bin/env node
// build-appsail.js — AppSail-only build pipeline:
//   1. next build with output:'standalone' (via APPSAIL_BUILD=1)
//   2. Clean .next/cache (reduces upload size — NOT run for Slate builds)
//   3. Sync .next/static and public/ into .next/standalone
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const env = { ...process.env, APPSAIL_BUILD: '1' };
const cwd = __dirname;

// Step 1: next build (postbuild runs automatically — just logs "Build complete")
console.log('[build-appsail] Building with APPSAIL_BUILD=1 (standalone output enabled)');
const build = spawnSync('node', ['node_modules/.bin/next', 'build'], {
  stdio: 'inherit',
  env,
  cwd,
  shell: false,
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

// Step 2: Clean .next/cache to reduce AppSail upload size
// (Slate skips this — OpenNext needs .next/cache to bundle correctly)
console.log('[build-appsail] Cleaning .next/cache to reduce upload size...');
try {
  fs.rmSync(path.join(cwd, '.next', 'cache'), { recursive: true, force: true });
  console.log('[build-appsail] .next/cache cleaned.');
} catch (e) {
  console.warn('[build-appsail] Warning: could not clean .next/cache:', e.message);
}

// Step 3: Sync .next/static and public/ into .next/standalone (AppSail needs these)
console.log('[build-appsail] Syncing standalone assets...');
const sync = spawnSync('node', [path.join('scripts', 'sync-standalone-assets.js')], {
  stdio: 'inherit',
  env,
  cwd,
  shell: false,
});

process.exit(sync.status ?? 0);
