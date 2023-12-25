import NewsCard from "../molecules/NewsCard";
import NewsHeader from "../molecules/NewsHeader";
import news1 from "../../assets/img/news1.png";
import news2 from "../../assets/img/news2.png";
import news3 from "../../assets/img/news3.png";

const news = [
  {
    id: 1,
    imgSrc: news1,
    imgAlt: "News 1",
    title: "Unleash the Power of Advanced Analytics",
    description:
      "Modern a Minimal and Clean Personal Portfolio Template for Framer.",
    timestamp: "2 Menuite Ago",
  },
  {
    id: 2,
    imgSrc: news2,
    imgAlt: "News 2",
    title: "Unleash the Power of Advanced Analytics",
    description:
      "Modern a Minimal and Clean Personal Portfolio Template for Framer.",
    timestamp: "2 Menuite Ago",
  },
  {
    id: 3,
    imgSrc: news3,
    imgAlt: "News 3",
    title: "Unleash the Power of Advanced Analytics",
    description:
      "Modern a Minimal and Clean Personal Portfolio Template for Framer.",
    timestamp: "2 Menuite Ago",
  },
];

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-[100px] gap-y-[30px] px-10 lg:px-[100px] ">
      <NewsHeader title="Discover the latest news.">
        Stay informed and inspired with valuable insights for business growth.
      </NewsHeader>

      <div className="grid gap-[10px] md:grid-cols-2 lg:grid-cols-3">
        {news.map(({ id, imgSrc, imgAlt, title, description, timestamp }) => (
          <NewsCard
            key={id}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
            timestamp={timestamp}
          >
            {description}
          </NewsCard>
        ))}
      </div>
    </section>
  );
}
