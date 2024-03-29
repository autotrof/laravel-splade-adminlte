import { createServer } from "http";
import { v as vueExports } from "./assets/vue-S2ksly5I.js";
import { renderToString } from "@vue/server-renderer";
import { k as kp, C as Cp, F as Fp } from "./assets/@protonemedia-CvQK2tVv.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "axios";
kp(createServer, renderToString, (props) => {
  return vueExports.createSSRApp({
    render: Cp(props)
  }).use(Fp);
});
