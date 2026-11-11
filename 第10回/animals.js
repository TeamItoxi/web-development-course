// 1種類ずつの情報をオブジェクトにまとめ、配列に並べる。
const animals = [
  {
    id: "red-panda",
    name: "レッサーパンダ",
    category: "mammal",
    imageSrc: "images/red-panda.png",
    imageAlt: "木の枝で休むレッサーパンダのイラスト",
    description: "木登りが得意。長くふさふさした尾が目印。",
  },
  {
    id: "penguin",
    name: "ペンギン",
    category: "bird",
    imageSrc: "images/penguin.svg",
    imageAlt: "氷の上に立つペンギンのイラスト",
    description: "翼を使って水の中を泳ぐ鳥。",
  },
  {
    id: "capybara",
    name: "カピバラ",
    category: "mammal",
    imageSrc: "images/capybara.svg",
    imageAlt: "水辺に立つカピバラのイラスト",
    description: "水辺で暮らす、大きなげっ歯類。",
  },
];

const favoriteKey = "zukan.favorite-ids";
const storageStatus = document.querySelector("#favorite-storage-status");

// IDの配列を読み、保存のない場合や読めない値は空の配列にする。
function loadFavorites() {
  try {
    const saved = localStorage.getItem(favoriteKey);
    const ids = saved === null ? [] : JSON.parse(saved);
    if (Array.isArray(ids)) {
      return ids.filter((id) => animals.some((animal) => animal.id === id));
    }
  } catch {
    showStorageMessage("保存済みのお気に入りを読み込めませんでした。");
  }
  return [];
}

function showStorageMessage(message) {
  storageStatus.textContent = message;
  storageStatus.hidden = false;
}

let favoriteIds = loadFavorites();

// 配列を文字列にして保存。失敗時も、開いている間は選択を使える。
function saveFavorites() {
  try {
    localStorage.setItem(favoriteKey, JSON.stringify(favoriteIds));
    storageStatus.hidden = true;
  } catch {
    showStorageMessage("お気に入りを保存できませんでした。");
  }
}

// IDの有無を切り替え、表示と保存内容へ反映する。
function toggleFavorite(id) {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter((favoriteId) => favoriteId !== id);
  } else {
    favoriteIds.push(id);
  }
  saveFavorites();
  updateList(id);
}

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
  const button = card.querySelector(".favorite-button");
  const selected = favoriteIds.includes(animal.id);
  button.setAttribute("aria-pressed", selected);
  button.setAttribute("aria-label", animal.name + "のお気に入り");
  button.addEventListener("click", () => toggleFavorite(animal.id));
  return card;
}

const searchForm = document.querySelector("#animal-search");
const searchInput = document.querySelector("#animal-keyword");
const searchStatus = document.querySelector("#animal-search-status");
const categoryInput = document.querySelector("#animal-category");
const onlyFavorites = document.querySelector("#only-favorites");
let keyword = "";

// 渡された配列からカードとナビを作り、結果を表示する。
function renderAnimals(items) {
  animalGrid.textContent = "";
  animalNav.textContent = "";

  for (let i = 0; i < items.length; i = i + 1) {
    const animal = items[i];
    animalGrid.append(createAnimalCard(animal));

    const link = document.createElement("a");
    link.href = "#" + animal.id;
    link.textContent = animal.name;
    animalNav.append(link);
  }

  if (items.length === 0) {
    searchStatus.textContent = "いきものが見つかりませんでした。";
  } else {
    searchStatus.textContent = "検索結果 " + items.length + "件";
  }
}

// 名前、分類、お気に入りの条件を全部満たす動物を表示する。
function updateList(focusId) {
  const category = categoryInput.value;
  const matches = animals.filter((animal) => {
    const nameMatches = animal.name.includes(keyword);
    const categoryMatches = category === "" || animal.category === category;
    const favoriteMatches = !onlyFavorites.checked || favoriteIds.includes(animal.id);
    return nameMatches && categoryMatches && favoriteMatches;
  });
  renderAnimals(matches);

  // カードの再生成でボタンが消えた場合は、絞り込み欄へフォーカスを戻す。
  if (focusId) {
    const button = document.getElementById(focusId)?.querySelector(".favorite-button");
    (button ?? onlyFavorites).focus();
  }
}

function handleSearch(event) {
  event.preventDefault();
  keyword = searchInput.value.trim();
  updateList();
}

searchForm.addEventListener("submit", handleSearch);
categoryInput.addEventListener("change", () => updateList());
onlyFavorites.addEventListener("change", () => updateList());
updateList();
