/*
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms.
*/

import type { cardData } from "$lib";

export const cards: cardData[] = [
    {
        title: "portproxy",
        description: "A stupid simple port-to-port reverse proxy.",
        language: "Go",
        url: "https://github.com/impliedgg/portproxy"
    },
    {
        title: "7ZVaultWF",
        description: "No-frills utility to unpack encrypted 7Zip 'vaults' to a temporary folder and save the changes.",
        language: "C#",
        url: "https://github.com/impliedgg/7ZVaultWF"
    },
    {
        title: "donottwitter",
        description: "A userscript to remove your ability to browse Twitter (now X).",
        language: "JavaScript",
        url: "https://github.com/impliedgg/donottwitter"
    },
    {
        title: "obs-autostart",
        description: "Automatically start OBS virtual camera and replay buffer with OBS.",
        language: "Lua",
        url: "https://github.com/impliedgg/obs-autostart"
    },
];

export const showcase_cards: cardData[] = cards.slice(0, 2);