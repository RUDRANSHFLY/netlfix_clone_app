import { Image, Text, View } from "react-native";
import React, { useState , useEffect } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import SearchBar from "./search-bar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/hooks/useFetch";

interface HeaderProps{
  search? : string;
  setSearchQuery? : (query : string) => void;
}

const Header = ({search , setSearchQuery} : HeaderProps) => {
  const router = useRouter();
  const { data : movies , loading: moviesLoading, error: moviesError } = useFetch(() =>
    fetchMovies({ query: "" })
  );

  const [value , setValue] = useState<string>(search ?? "");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery] = useState<string>(""); 

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setQuery(value ?? ""); 
      if (setSearchQuery) {
        setSearchQuery(value ?? ""); 
      }
    },500)

    return () => clearTimeout(delayDebounceFn)
  }, [value,setSearchQuery])
  


  return (
    <View className="flex-1 w-full">
      <Image source={images.bg} className="absolute w-full z-0" />

      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      {!moviesLoading && !moviesError && (
        <>
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
            value={search ?? ""}
            onChangeText={(value) => setValue(value)}
          />

          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>

          {!moviesLoading && !moviesError && search?.trim() && movies?.length > 0 && (
            <Text className="text-xl text-white font-bold">
              Search Results for{" "}
              <Text className="text-accent">{value}</Text>
            </Text>
          )}
        </>
      )}
    </View>
  );
};

export default Header;
