/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};

export default config;
