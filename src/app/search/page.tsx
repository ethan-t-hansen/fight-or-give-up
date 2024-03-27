"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HomeSearch from "../components/SearchBar";
import FoodItemCard from "../components/FoodItemCard";
import Navbar from "../components/Navbar";

const Searcher = require("../components/Fetch.tsx");

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query");
  const [foods, setFoods] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (searchTerm) {
      Searcher.fetchFoodData(searchTerm)
        .then((data: any) => {
          setFoods(data);
          setIsLoading(false);
        })
        .catch((error: Error) => {
          console.error(error.message);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <div className="home-wrap">
        <div className="spacer-small" />
        <div className="center-div">
          <div className="results-wrap">
            <HomeSearch />
            <p className="showing-results">
              {" "}
              Showing Results for "{searchTerm}"{" "}
            </p>
          </div>
        </div>
        <div className="results-container">
          <ul>
            {isLoading ? (
              <div> Loading... </div>
            ) : foods && foods.length > 0 ? (
              foods.map((currItem: any) => <FoodItemCard item={currItem} />)
            ) : (
              <div> No items found. </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
