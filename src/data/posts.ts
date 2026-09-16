/*
    LICENSE EXCEPTION: This file is licensed under the zlib/libpng license with an additional restriction on identity.
    See `licenses/zlib-extra-clause.txt` for terms.

    To follow the license for this file, simply replace `post_index` with your posts.
*/

let post_index = [
    "markdown-in-sveltekit"
]

type postFrontmatter = {
    title: string,
    description?: string,
    date?: string,
    tags?: string[]
}

export type Post = postFrontmatter & {
    fname: string
}

const build_posts: () => Promise<Post[]> = async () => {
    let posts = await Promise.all(post_index.map(async name => {
        let postcomponent = await import(`data/posts/${name}.svelte.md`);
        let frontmatter = structuredClone(postcomponent.frontmatter);
        let newpost: Post = { fname: name, ...frontmatter } as Post;
        return newpost;
    }));
    posts.sort((a,b)=>{
        if (a.date === undefined) {
            return -1;
        }
        if (b.date === undefined) {
            return 1;
        }
        let asNum = (str:string)=>parseInt(str.replaceAll('-',''));
        let num1 = asNum(a.date);
        let num2 = asNum(b.date);
        return num2 - num1;

    });
    return posts;
}

export const POSTS = await build_posts();