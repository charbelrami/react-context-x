import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["./src/index.js"],
  outfile: "./dist/index.mjs",
  platform: "node",
  format: "esm",
  loader: { ".js": "jsx" },
  bundle: true,
  external: ["react", "react-dom"],
  minify: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});

esbuild.buildSync({
  entryPoints: ["./src/index.js"],
  outfile: "./dist/index.js",
  platform: "node",
  format: "cjs",
  loader: { ".js": "jsx" },
  bundle: true,
  external: ["react", "react-dom"],
  minify: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
