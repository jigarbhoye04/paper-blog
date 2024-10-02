import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;


/*
This file is a utility function that filters the posts
based on the postFilter function and sorts them based
on the modified date or the published date of the post.
  
  Then returns the sorted posts.

  the postFilter function is imported from the postFilter.ts file.
  which checks if the post is a draft or if the current time is greater than the publish time of the post.
  then accordingly returns a boolean value.
  
*/
