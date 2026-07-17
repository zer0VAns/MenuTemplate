interface FilterState {
  category: string;
  query: string;
}

const state: FilterState = { category: "all", query: "" };

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function applyFilters() {
  const cards = document.querySelectorAll<HTMLElement>("[data-product-card]");
  const sections = document.querySelectorAll<HTMLElement>("[data-category-section]");
  const featured = document.querySelector<HTMLElement>("[data-featured-section]");
  const emptyState = document.querySelector<HTMLElement>("[data-search-empty-state]");

  const query = normalize(state.query.trim());
  const isSearching = query.length > 0;

  cards.forEach((card) => {
    const name = normalize(card.dataset.productName ?? "");
    const description = normalize(card.dataset.productDescription ?? "");
    const matchesSearch = !isSearching || name.includes(query) || description.includes(query);
    card.hidden = !matchesSearch;
  });

  sections.forEach((section) => {
    const matchesCategory = state.category === "all" || section.id === state.category;
    const visibleCount = section.querySelectorAll("[data-product-card]:not([hidden])").length;
    section.hidden = isSearching ? visibleCount === 0 : !matchesCategory;
  });

  if (featured) {
    featured.hidden = isSearching || state.category !== "all";
  }

  if (emptyState) {
    const anyVisible = document.querySelectorAll("[data-product-card]:not([hidden])").length > 0;
    emptyState.hidden = anyVisible;
  }
}

window.addEventListener("category-change", (event) => {
  const { categoryId } = (event as CustomEvent<{ categoryId: string }>).detail;
  state.category = categoryId;
  applyFilters();
});

window.addEventListener("search-change", (event) => {
  const { query } = (event as CustomEvent<{ query: string }>).detail;
  state.query = query;
  applyFilters();
});