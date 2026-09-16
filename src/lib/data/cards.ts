/*
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms.
*/

import type { CardData } from "$lib/types/cardData";

export const cards: CardData[] = [
    {
        title: "portproxy",
        description: "A stupid simple port-to-port reverse proxy, primarily intended for temporarily proxying services like games.",
        language: "Go",
        url: "https://github.com/impliedgg/portproxy"
    },
    {
        title: "userscripts",
        description: "A collection of small userscripts designed to improve the experience on certain websites.",
        language: "JavaScript",
        url: "https://github.com/impliedgg/userscripts"
    },
    {
        title: "7ZVaultWF",
        description: "No-frills Windows utility to unpack encrypted 7-zip archives to a temporary folder for easy access on public machines.",
        language: "C#",
        url: "https://github.com/impliedgg/7ZVaultWF"
    },
    {
        title: "obs-autostart",
        description: "Automatically start OBS' virtual camera and replay buffer when OBS starts.",
        language: "Lua",
        url: "https://github.com/impliedgg/obs-autostart"
    },
];

export const showcase_cards: CardData[] = cards.slice(0, 2);