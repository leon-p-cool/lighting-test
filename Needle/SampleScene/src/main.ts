import { NeedleEngine, GameObject } from "@needle-tools/engine";
import { LightmapConfigurations } from "@needle-tools/multi-lightmap/Lightmaps";

let lightmaps: LightmapConfigurations|null = null;

NeedleEngine.addContextCreatedCallback(({context}) => {
    lightmaps = GameObject.getComponentInChildren(context.scene, LightmapConfigurations);
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prev-lightmap")?.addEventListener("click", () => {
        lightmaps?.previousLightmap();
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next-lightmap")?.addEventListener("click", () => {
        lightmaps?.nextLightmap();
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cycle-lightmap")?.addEventListener("click", () => {
        lightmaps?.startCyclingLightmaps();
    });
});