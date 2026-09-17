export const site = {
  name: "ZG's Homepage",
  url: "https://wuzgng.github.io",
  defaultDescription:
    "ZG's Homepage：记录技术推演、项目实践，以及尚未被归类的思考。",
  defaultImage: `${import.meta.env.BASE_URL}images/og-cover.png`,
  defaultImageAlt: "ZG's Homepage 默认封面图",
} as const;

export function absoluteUrl(path: string, base = site.url) {
  return new URL(path, base).href;
}

export function pageTitle(_title: string) {
  return site.name;
}
