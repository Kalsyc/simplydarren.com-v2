import { marked } from 'marked'; // import the marked lib

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }: { fetch: any, params: any }) => {
  const slug = params['projectId'];
  const res = await fetch(`/markdown/cullinary-2.md`);
  const post = await res.text();

  return {
    slug,
    post: marked.parse(post),
  };
};
