import "./bootstrap-admin-center";
import "../css/admin-franchise.scss";
import "@protonemedia/laravel-splade/dist/style.css";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

const app = createApp({
        render: renderSpladeApp({ el })
    })
    .use(SpladePlugin, {
        "max_keep_alive": 10,
        "transform_anchors": false,
        "progress_bar": true,
        "view_transitions": true,
    });

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
app.mount(el)
