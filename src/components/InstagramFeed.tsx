import { FaInstagram } from "react-icons/fa";

const images = [
  { src: "/assets/IMG_0037_color.avif", pos: "object-center" },
  { src: "/assets/IMG_0029.avif",        pos: "object-top" },
  { src: "/assets/IMG_0028.avif",        pos: "object-center" },
  { src: "/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif", pos: "object-top" },
  { src: "/assets/IMG_0030.avif",        pos: "object-top" },
  { src: "/assets/dr-yalda-treatment.avif", pos: "object-center" },
];

export default function InstagramFeed() {
  return (
    <div className="border-b border-brand-black/10 py-32 bg-parchment text-brand-black">
      <div className="pg-container">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <FaInstagram size={14} className="text-brand-black/50" />
            <p className="body-xs-caps">@dryaldajamali</p>
          </div>
          <a
            href="https://instagram.com/dryaldajamali"
            target="_blank"
            rel="noopener noreferrer"
            className="body-xs-caps border-b border-brand-black/20 pb-1 hover:text-brand-black/80 hover:border-brand-black/50 transition-colors duration-300"
          >
            Follow
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {images.map(({ src, pos }, i) => (
            <a key={i} href="https://instagram.com/dryaldajamali" target="_blank" rel="noopener noreferrer" className="relative block aspect-square overflow-hidden group">
              <img src={src} alt="" aria-hidden="true" className={`w-full h-full object-cover ${pos} transition-opacity duration-500 group-hover:opacity-70`} />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
