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
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center p-8">
        <GiHamburgerMenu
          className="bg-black text-white p-2 size-10 rounded cursor-pointer"
          onClick={toggleMenu}
        />
        <p>Sign Up for our Sports Newsletter</p>
        <CiSearch className="border p-2 size-10 rounded" />
      </div>
      <div
        className={`absolute top-[4.5rem] md:hidden left-0 w-full bg-gray-800 bg-opacity-90 text-white flex flex-col p-4 z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full hidden"
        }`}
      >
        <ul className="space-y-8 text-2xl">
          <li>
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#">Join Us</a>
          </li>
          <li>
            <a href="#">Customer Care</a>
          </li>
          <li>
            <a href="#">Reach Out</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row p-10 sm:p-4 space-x-20 items-start">
        <div className="md:w-[50%] w-full">
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
        <div className="md:w-[50%] w-full py-4">
          {articles.slice(1, 4).map((article, index) => (
            <div key={index} className="flex flex-col-reverse md:flex-row p-2">
              <div className="px-2 py-4 md:py-0">
                <p className="font-semibold text-lg">{article.title}</p>
                <p>
                  {article.description
                    ? article.description.length > 100
                      ? article.description.substring(0, 100) + "..."
                      : article.description
                    : "No description available."}
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
                className="md:w-[50%] rounded h-full shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
