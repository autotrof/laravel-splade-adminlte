import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import 'admin-lte/plugins/jquery/jquery.min.js';

import "../css/login.scss";
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
