import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import magicManualSideBar from "./sidebars/magicManualSiderBar";
// @ts-ignore
export default {
    "/Galbible/": roadmapSideBar,
    "/MagicManual/": magicManualSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
