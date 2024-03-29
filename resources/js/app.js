import "./bootstrap";
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import "../css/app.scss";
import "@protonemedia/laravel-splade/dist/style.css";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

createApp({
    render: renderSpladeApp({ el })
})
    .use(SpladePlugin, {
        "max_keep_alive": 10,
        "transform_anchors": false,
        "progress_bar": true,
        "view_transitions": true,
    })
    .mount(el);
