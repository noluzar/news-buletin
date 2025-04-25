import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
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

const SportsNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=38a4e1049c1a4803b20ce65468bcb902"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <div className="px-2 pt-8">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold">Sports News</h1>
        <div className="flex items-center space-x-4 text-red-600">
          <p>Show More</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="flex items-start justify-start space-x-20">
        <div className="w-[50%] py-4">
          {articles.slice(1, 4).map((article, index) => (
            <div key={index} className="flex p-2">
               <img
                src={article.urlToImage}
                className="w-[50%] rounded h-56 shadow-lg"
              />
              <div className="px-2">
                <p className="font-semibold text-lg">{article.title}</p>
                <p>
                  {article.description.length > 100
                    ? article.description.substring(0, 100) + "..."
                    : article.description}
                </p>
                <div className="flex items-center space-x-2 py-2">
                  <p className="text-red-600 font-semibold">
                    {article.source.name}
                  </p>
                  <LuDot />
                  <p>{article.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] h-full">
          {articles.slice(0, 1).map((article, index) => (
            <div key={index}>
              <img src={article.urlToImage} className="rounded h-full" />
              <div className="py-4 space-y-4">
                <p className="font-bold text-5xl">{article.title}</p>
                <p>{article.description}</p>
                <div className="flex items-center space-x-2 py-2">
                  <p className="text-red-600 font-semibold">
                    {article.source.name}
                  </p>
                  <LuDot />
                  <p>{article.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
