const clientTags = {
  luau: "Luau",
  rokit: "Rokit",
};

export default function projectCard(title, img, desc, tags, links) {
  // card container
  const card = document.createElement("div");
  card.className = "card";

  // title
  const titleElt = document.createElement("h3");
  titleElt.textContent = title;
  card.appendChild(titleElt);

  // image
  const imageElt = document.createElement("img");
  imageElt.src = img;
  card.appendChild(imageElt);

  // description
  const descriptionElt = document.createElement("h4");
  descriptionElt.textContent = desc;
  card.appendChild(descriptionElt);

  // tags
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "tags-container";

  tags.forEach((tag) => {
    const tagElt = document.createElement("div");
    tagElt.className = "tag tag-" + tag;
    tagElt.textContent = clientTags[tag];
    tagsContainer.appendChild(tagElt);
  });

  card.appendChild(tagsContainer);

  // links
  const linksContainer = document.createElement("div");
  linksContainer.className = "links-container";

  for (const [key, value] of Object.entries(links)) {
    const linkElt = document.createElement("div");
    linkElt.className = "link";

    const aElt = document.createElement("a");
    aElt.href = value;
    aElt.target = "_blank";
    aElt.textContent = key;

    linkElt.appendChild(aElt);
    linksContainer.appendChild(linkElt);
  }

  card.appendChild(linksContainer);

  document.getElementById("projects").appendChild(card);
}
