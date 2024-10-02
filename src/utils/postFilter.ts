import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;

/*
This file is a filter function that
checks if the post is a draft or
if the current time is greater than
the publish time of the post.

then accordingly returns a boolean value.

*/
