# Netflix Clone

This project is a Netflix Clone that features a home page displaying trending and latest movies, a search functionality to find movies, and a backend powered by Appwrite. The movie data is fetched using the TMDB API.

## Features
- **Screenshots**: Visual representation of the app's features is available in the `assets/screenshots` folder. Below are some previews:
   - ![Screenshot 1](assets/screenshots/s1.jpg)
   - ![Screenshot 2](assets/screenshots/s2.jpg)
   - ![Screenshot 3](assets/screenshots/s3.jpg)
   - ![Screenshot 4](assets/screenshots/s4.jpg)
   - ![Screenshot 5](assets/screenshots/s5.jpg)
   - ![Screenshot 6](assets/screenshots/s6.jpg)
   - ![Screenshot 7](assets/screenshots/s7.jpg)
   - ![Screenshot 8](assets/screenshots/s8.jpg)
- **Home Page**: Displays trending and latest movies.
- **Search Functionality**: Allows users to search for movies by title.
- **Backend**: Built using [Appwrite](https://appwrite.io/).
- **Movie Data**: Fetched from [TMDB API](https://www.themoviedb.org/documentation/api).

## Tech Stack

- **Frontend**: React (or specify your frontend framework/library if different)
- **Backend**: Appwrite
- **API**: TMDB API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your TMDB API key and Appwrite configuration:
     ```env
     REACT_APP_TMDB_API_KEY=your_tmdb_api_key
     REACT_APP_APPWRITE_ENDPOINT=your_appwrite_endpoint
     REACT_APP_APPWRITE_PROJECT_ID=your_appwrite_project_id
     ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Visit the home page to view trending and latest movies.
- Use the search bar to find specific movies.
- The backend handles user data and other server-side operations using Appwrite.

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie data.
- [Appwrite](https://appwrite.io/) for backend services.

## License

This project is licensed under the [MIT License](LICENSE).