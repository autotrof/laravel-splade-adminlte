import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import fs from 'fs';
import path from 'path';
import tailwind from 'tailwindcss';

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return defineConfig({
        server: {
            host: true,
            hmr: {
                clientPort: process.env.VITE_CLIENT_PORT,
                host: process.env.VITE_APP_DOMAIN
            },
            https: {
                key: fs.readFileSync(process.env.VITE_SSL_PRIVATE_KEY),
                cert: fs.readFileSync(process.env.VITE_SSL_CERT)
            },
            watch: {
                ignored: [
                    '**/vendor/**',
                    '**/storage/**'
                ]
            }
        },
        plugins: [
            laravel({
                input: [
                    "resources/js/admin-center.js",
                    "resources/js/admin-franchise.js",
                    "resources/js/frontend-center.js"
                ],
                ssr: "resources/js/ssr.js",
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        css: {
            postcss: {
                plugins: [
                    tailwind({
                        config: './tailwind-admin-center.config'
                    }),
                    tailwind({
                        config: './tailwind-frontend-center.config'
                    })
                ]
            }
        },
        ssr: {
            noExternal: ["vue", "@protonemedia/laravel-splade"]
        },
        resolve: {
            alias: {
              '~' : path.resolve(__dirname, './node_modules/')
            }
        },
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output:{
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        }
    });
}