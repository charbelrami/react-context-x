import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["./src/index.js"],
  outfile: "./dist/index.mjs",
  platform: "node",
  format: "esm",
  loader: { ".js": "jsx" },
  bundle: true,
  external: ["react", "react-dom"],
  define: {
    "process.env.NODE_ENV": '"development"',
  },
});
