// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log("🔍 Loaded Env Variables:", env); // Debugging

  return {
    plugins: [react()],
    define: {
      "process.env": env, // Explicitly pass env variables
    },
  };
});
