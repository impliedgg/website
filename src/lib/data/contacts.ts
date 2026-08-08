/*
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms.
*/

export type contactData = {
    name: string;
    label: string | undefined;
    type: "copy" | "link";
    data: string;
};

export const contacts: contactData[] = [
    {
        name: "discord",
        label: "@impliedgg",
        type: "copy",
        data: "impliedgg",
    },
    {
        name: "telegram",
        label: "@impliedgg",
        type: "link",
        data: "https://t.me/impliedgg",
    },
    {
        name: "bluesky",
        label: "implied.win",
        type: "link",
        data: "https://bsky.app/profile/implied.win",
    },
    {
        name: "email",
        label: "me@implied.win",
        type: "link",
        data: "mailto:me@implied.win",
    },
    {
        name: "signal",
        label: "@emma.04",
        type: "link",
        data: "https://signal.me/#eu/dFjJ06TsakVLfFcqCtDmCQ3pHCJUiyO-9aag-6CBtn2eIRP18S1AyIC-kIOdW20C"
    }
];