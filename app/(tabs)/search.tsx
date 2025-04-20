import Header from "@/components/header";
import MovieCard from "@/components/movie-card";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>();

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery ?? " " }));

  useEffect(() => {
    
    

    const funcMov = async () => {
      if (searchQuery?.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    };

    funcMov();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);


    useEffect(() => {

      const updateSearch = async () => {

        if(movies?.length > 0 && movies?.[0]){
          updateSearchCount(searchQuery?? "",movies?.[0]);
        }
      }
    
      updateSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies])

  return (
    <View className="flex-1 bg-primary">
      {loading && (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          className="mt-10 self-center"
        />
      )}

      {error && (
        <Text className="text-red-500 px-5 my-3">Error : {error?.message}</Text>
      )}

      <FlatList
        ListHeaderComponent={
          <Header
            search={searchQuery}
            setSearchQuery={(value) => setSearchQuery(value)}
          />
        }
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={
          !loading && !error ? (
            <>
            <View className="mt-5 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery?.trim() ? "No Movies Found" : "Search for Movies"}
              </Text>
             </View>
             </>
          ) : null 
        }
      />
    </View>
  );
};

export default Search;
