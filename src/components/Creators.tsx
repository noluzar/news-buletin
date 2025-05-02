import React from "react";

const Creators: React.FC = () => {
    const creators = [
        {
            src: './Arabile Gumede.webp',
            name: 'Arabile Gumede',
            channel: 'BBC News',
        },
        {
            src: './Dan Murphy.webp',
            name: 'Dan Murphy',
            channel: 'BBC News',
        },
        {
            src: './Emily Tan.webp',
            name: 'Emily Tan',
            channel: 'BBC News',
        },
        {
            src: './Martin Soong.webp',
            name: 'Martin Soong',
            channel: 'BBC News',
        },
        {
            src: './Silvia Amaro.webp',
            name: 'Silvia Amaro',
            channel: 'BBC News',
        },
    ]

    return (
        <div className="md:mt-[30px] p-8">
        <h1 className="font-bold text-[30px]">Top Creators</h1>
        <div className="flex md:flex-row flex-col justify-between pb-11">
            {creators.map((item, index) => (
                <div key={index} className="flex items-center gap-4 mt-8">
                    <div className="rounded-full w-[10vh] h-[10vh]">
                    <img src={item.src} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="font-bold text-xl">{item.name}</p>
                        <p className="font-semibold text-red-600">{item.channel}</p>
                    </div>
                </div>
            )
            )}
        </div>
    </div>
    );
  };
  
  export default Creators;