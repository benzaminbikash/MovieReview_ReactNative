const apiUrl = 'https://api.themoviedb.org/3'
const api_key = 'api_key=f6ffd9944913182603bcb59dbab7c133'

export const popular = `${apiUrl}/movie/popular?${api_key}`
export const upcoming = `${apiUrl}/movie/upcoming?${api_key}`
export const tv = `${apiUrl}/tv/popular?${api_key}`
export const family = `${apiUrl}/discover/movie?${api_key}&with_genres=10751`

export const documentary = `${apiUrl}/discover/movie?${api_key}&with_genres=99`

// export const getMovie = `${apiUrl}/movie/${id}?${api_key}`
//  `https://api.themoviedb.org/3/movie/${id}?api_key=f6ffd9944913182603bcb59dbab7c133`,
// `https://api.themoviedb.org/3/search/${type}?api_key=f6ffd9944913182603bcb59dbab7c133&query=${query}`,
