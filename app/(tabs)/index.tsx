import Header from "@/components/header";
import MovieCard from "@/components/movie-card";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import { View, ActivityIndicator, Text, FlatList } from "react-native";

export default function Index() {

  const {

    loading  : trendingMoviesLoading,
    error : trendingMoviesError,

  } = useFetch(getTrendingMovies)

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary px-5">
  
      {moviesLoading || trendingMoviesLoading ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          className="mt-10 self-center"
        />
      ) : moviesError || trendingMoviesError ? (
        <Text className="text-white">Error : {moviesError?.message}</Text>
      ) : (
        <View className="flex-1">
          <>
     
            <FlatList
              ListHeaderComponent={<Header />}
              className="mt-2 pb-32"
              scrollEnabled={true}
              contentContainerStyle={{
                minHeight: "100%",
                paddingBottom: 10,
              }}
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
            />
          </>
        </View>
      )}
    </View>
  );
}
