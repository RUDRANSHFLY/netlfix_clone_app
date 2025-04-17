interface Movie {
    id: number;
    title: string;
    adult: boolean;
    backdrop_path: string,
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface TrendingMovie{
    searchTerm : string;
    movie_id : number;
    title : string;
    count : number;
    poster_url : string;
}

interface MovieDetails {
    adult : boolean;
    backdrop_path : string | null ;
    belongs_to_collection : {
        id : number ;
        name : string;
        poster_path : string;
        backdrop_path : string
    } | null ;
    budget : number ;
    genres : {
        id : number;
        name : string;
    }[];
    status : string;
    tagline : string;
    title : string;
    video : boolean;
    vote_average : number;
    vote_count : number;
}

interface TrendingCardPRops{
    movie : TrendingMovie;
    index : number;
}