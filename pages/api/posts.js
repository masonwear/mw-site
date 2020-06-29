import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://masondwear.ghost.io',
  key: 'd1cead098b7d0bd56f6ca7e4b5',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPortfolio() {
  return await api.posts
    .browse({
      limit: "all",
      filter: "tag:portfolio"

    })
    .catch(err => {
      console.error(err);
    });
}