export function parseRoute(hash) {
  if (hash === "#favorites") return { view: "favorites" };
  const match = /^#detail\/([a-z0-9-]{1,40})$/.exec(hash);
  if (match) return { view: "detail", name: match[1] };
  return { view: "list" };
}

export function detailPath(name) {
  return "#detail/" + name;
}
