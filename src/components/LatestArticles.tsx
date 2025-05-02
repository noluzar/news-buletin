import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import NewsColumn from "./NewsRow";

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

const LatestArticles: React.FC = () => {
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
    <div className="border-y">
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 px-10 sm:p-4">
      {articles.slice(5, 7).map((article, index) => (
        <div key={index} className="relative w-full md:w-1/2 h-[400px] rounded overflow-hidden shadow-lg">
          <img
            src={article.urlToImage || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
            <div className="flex items-center text-white text-sm mb-2">
              <p className="font-semibold text-red-500">{article.source.name}</p>
              <LuDot />
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
            <p className="text-white font-bold text-2xl">{article.title}</p>
          </div>
        </div>
      ))}
    </div> 
    <div className="px-4 py-4 pt-10">
        <h1 className="font-bold text-4xl pb-4">Latest Articles</h1>
        <NewsColumn/>
      </div>
    </div>
   
  );
};

export default LatestArticles;
