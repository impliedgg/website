import type { PageServerLoad } from "./$types";
import { POSTS } from "data/posts";


export const load: PageServerLoad = ({}) => {
    return {
        posts: POSTS
    }
}