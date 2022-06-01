import Image from "next/image";
import React from "react";

export const Movie: React.FunctionComponent = (props) => {
    return (
        <div className="bg-stone-600 w-max rounded-lg flex flex-col m-2 hover:scale-105 transition-transform">
            <Image
                className="rounded-t-lg"
                width={300}
                height={450}
                src="https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
            />
            <div className="bg-stone-700 rounded-b-lg py-2 text-center text-white">
                Fight Club
            </div>
        </div>
    );
};
