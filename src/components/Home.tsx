import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
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

const Home: React.FC = () => {
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
    <div className="bg-gray-100">
      <div className="flex justify-between items-center p-8">
        <GiHamburgerMenu className="bg-black text-white p-2 size-10 rounded cursor-pointer" />
        <p>Sign Up for our Sports Newsletter</p>
        <CiSearch className="border p-2 size-10 rounded" />
      </div>
      <hr />
      <div className="flex p-10 sm:p-4 space-x-20 items-start">
        <div className="w-[50%]">
          {articles.slice(0, 1).map((article, index) => (
            <div key={index}>
              <div className="py-4">
                <p className="font-bold text-5xl">{article.title}</p>
                <div className="flex items-center space-x-2 py-2">
                  <p className="text-red-600 font-semibold">
                    {article.source.name}
                  </p>
                  <LuDot />
                  <p>{article.publishedAt}</p>
                </div>
              </div>
              <img src={article.urlToImage} className="rounded h-full" />
            </div>
          ))}
        </div>
        <div className="w-[50%] py-4">
          {articles.slice(1, 4).map((article, index) => (
            <div key={index} className="flex p-2">
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
              <img
                src={article.urlToImage}
                className="w-[50%] rounded h-full shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
