import { FaInstagram } from "react-icons/fa";
import { fetchInstagramPosts } from "@/lib/instagram";

const HANDLE = "dr.yalda";
const PROFILE_URL = `https://instagram.com/${HANDLE}`;

// Shown when no live feed is available (missing/expired token, API error, or
// local dev without secrets). Keeps the section visually intact.
const fallbackImages = [
  { src: "/assets/IMG_0037_color.avif", pos: "object-center" },
  { src: "/assets/IMG_0029.avif",        pos: "object-top" },
  { src: "/assets/IMG_0028.avif",        pos: "object-center" },
  { src: "/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif", pos: "object-top" },
  { src: "/assets/IMG_0030.avif",        pos: "object-top" },
  { src: "/assets/dr-yalda-treatment.avif", pos: "object-center" },
];

// Number of posts shown. Keep in sync with the `md:grid-cols-*` below so the
// row stays full (no trailing empty cell).
const COUNT = 5;

export default async function InstagramFeed() {
  const posts = await fetchInstagramPosts(COUNT);
  const isLive = posts.length > 0;

  return (
    <div className="border-b border-brand-black/10 py-24 md:py-40 bg-parchment text-brand-black">
      <div className="pg-container">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <FaInstagram size={14} className="text-brand-black/50" />
            <p className="body-xs-caps">@{HANDLE}</p>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="body-xs-caps link-caps inline-flex items-center gap-3"
          >
            Follow
          </a>
        </div>

        {/* Mobile: featured first post full-width, then pairs. Desktop: single 5-across row. */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {isLive
            ? posts.map((post, i) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block aspect-square overflow-hidden group ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <img
                    src={post.imageUrl}
                    alt={post.caption || "Instagram post by Dr Yalda Jamali"}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-70"
                  />
                </a>
              ))
            : fallbackImages.slice(0, COUNT).map(({ src, pos }, i) => (
                <a
                  key={i}
                  href={PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block aspect-square overflow-hidden group ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className={`w-full h-full object-cover ${pos} transition-opacity duration-500 group-hover:opacity-70`}
                  />
                </a>
              ))}
        </div>

      </div>
    </div>
  );
}
