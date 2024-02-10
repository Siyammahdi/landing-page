import Image from "next/image";
import SearchBar from "./Components/SerachBar/SearchBar";
import Navigation from "./Components/Navigation/Navigation";
import Display from "./Components/Display/Display";
import BikeList from "./Components/BikeList/BikeList";

export default function Home() {
  return (
    <main className="bg-[#2F2F2F]">
      <div className="max-w-7xl mx-auto py-20">
        <div className="relative bottom-8 ">
          <SearchBar />
        </div>
        <div className="flex justify-between">
          <Navigation />
          <div>
            <Display />
            <BikeList />
          </div>
        </div>
      </div>
    </main>
  );
}

//bg-[#2F2F2F]
