export const linksHelper = (link) => {
  return link.split("/").pop().replace(/-/g, " ");
};
