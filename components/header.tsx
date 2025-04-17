import { Image, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import SearchBar from "./search-bar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/hooks/useFetch";

const Header = () => {
  const router = useRouter();
  const { loading: moviesLoading, error: moviesError } = useFetch(() =>
    fetchMovies({ query: "" })
  );
  return (
    <View className="flex-1 w-full">
      <Image source={images.bg} className="absolute w-full z-0" />

      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      {!moviesLoading && !moviesError && (
        <>
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
          />

          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>
        </>
      )}
    </View>
  );
};

export default Header;
