import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";

type Article = {
  title: string;
  description: string;
  url: string;
  source: {
    name: string;
  };
  publishedAt: string;
  urlToImage: string;
};

const WeeklyHighlight: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;


  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <div className="px-4 pt-8">
      <h1 className="text-4xl font-bold">Weekly Highlight</h1>
      <div className="grid md:grid-cols-4 gap-4 py-10">
        {articles.slice(2, 6).map((article, index) => (
          <div key={index}>
            <img src={article.urlToImage} className="w-full h-48 rounded" />
            <div>
              <p className="text-2xl font-bold py-2">
                {article.title.length > 50
                  ? article.title.substring(0, 100) + "..."
                  : article.title}
              </p>
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-red-500">
                  {article.source.name}
                </p>
                <LuDot />
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyHighlight;
