// 1種類ずつの情報をオブジェクトにまとめ、配列に並べる。
const animals = [
  {
    id: "red-panda",
    name: "レッサーパンダ",
    imageSrc: "images/red-panda.png",
    imageAlt: "木の枝で休むレッサーパンダのイラスト",
    description: "木登りが得意。長くふさふさした尾が目印。",
  },
  {
    id: "penguin",
    name: "ペンギン",
    imageSrc: "images/penguin.svg",
    imageAlt: "氷の上に立つペンギンのイラスト",
    description: "翼を使って水の中を泳ぐ鳥。",
  },
  {
    id: "capybara",
    name: "カピバラ",
    imageSrc: "images/capybara.svg",
    imageAlt: "水辺に立つカピバラのイラスト",
    description: "水辺で暮らす、大きなげっ歯類。",
  },
];

const cardTemplate = document.querySelector("#animal-card-template");
const animalGrid = document.querySelector("#animal-grid");
const animalNav = document.querySelector("#animal-nav");

/**
 * 1種類のデータから、画面に追加できるカードを作る。
 * @param {object} animal 動物1種類のデータ。
 * @returns {HTMLElement} データを入れたカード。
 */
function createAnimalCard(animal) {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  card.id = animal.id;
  card.querySelector("h3").textContent = animal.name;

  const image = card.querySelector("img");
  image.src = animal.imageSrc;
  image.alt = animal.imageAlt;

  const description = card.querySelector(".animal-description");
  description.textContent = animal.description;
  return card;
}

// カードとナビに、同じ配列の情報を使う。
for (let i = 0; i < animals.length; i = i + 1) {
  const animal = animals[i];
  animalGrid.append(createAnimalCard(animal));

  const link = document.createElement("a");
  link.href = "#" + animal.id;
  link.textContent = animal.name;
  animalNav.append(link);
}
