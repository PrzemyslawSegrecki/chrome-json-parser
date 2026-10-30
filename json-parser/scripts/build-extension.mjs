import { build } from 'esbuild';

await build({
    entryPoints: ['src/viewer.js'],
    outfile: '../extension/viewer/viewer.js',
    bundle: true,
    minify: true,
    loader: { '.js': 'jsx', '.svg': 'dataurl' },
    define: { 'process.env.NODE_ENV': '"production"' },
});
console.log('Zbudowano ../extension/viewer/viewer.js');
