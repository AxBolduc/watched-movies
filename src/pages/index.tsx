import type { NextPage } from "next";
import { Movie } from "../components/Movie";
import { NavBar } from "../components/NavBar";

const Home: NextPage = () => {

  const movies: Array<number> = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="">
      <NavBar />
      <div id="MovieGrid" className="m-4 flex flex-wrap justify-around">
        {movies.map((data) => {
          return <Movie key={data}/>
        })}
      </div>
    </div>
  );
};

export default Home;
