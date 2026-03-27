/**
 * Datos simulados de películas y series para el clon de Netflix
 * Estos datos se usan para mostrar el contenido sin necesidad de una API real
 */

export const moviesData = [
  {
    id: 1,
    title: "Stranger Things",
    name: "Stranger Things",
    original_title: "Stranger Things",
    poster_path: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1607604276583-b39e66f044ab?w=1920&h=1080&fit=crop",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    overview_es: "Cuando un joven desaparece, un pequeño pueblo descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una extraña niña.",
    vote_average: 8.6,
    vote_count: 8500,
    release_date: "2016-07-15",
    first_air_date: "2016-07-15",
    media_type: "tv",
    genre_ids: [18, 10765, 9648],
    original_language: "en",
    popularity: 2500,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/mindR-4RqiM",
    featured: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    name: "The Dark Knight",
    original_title: "The Dark Knight",
    poster_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    overview_es: "Batman eleva las apuestas en su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y el fiscal Harvey Dent, Batman se dispone a desmantelar las organizaciones criminales que asolan las calles.",
    vote_average: 9.0,
    vote_count: 25000,
    release_date: "2008-07-16",
    media_type: "movie",
    genre_ids: [28, 80, 18],
    original_language: "en",
    popularity: 1800,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/EXeTwQWrcwY",
    featured: true
  },
  {
    id: 3,
    title: "Inception",
    name: "Inception",
    original_title: "Inception",
    poster_path: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    overview_es: "Un ladrón que roba secretos corporativos mediante tecnología para compartir sueños recibe la tarea inversa de plantar una idea en la mente de un director ejecutivo.",
    vote_average: 8.4,
    vote_count: 32000,
    release_date: "2010-07-15",
    media_type: "movie",
    genre_ids: [28, 878, 12],
    original_language: "en",
    popularity: 1600,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/YoHD9XEInc0",
    featured: false
  },
  {
    id: 4,
    title: "Breaking Bad",
    name: "Breaking Bad",
    original_title: "Breaking Bad",
    poster_path: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=1920&h=1080&fit=crop",
    overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    overview_es: "Un profesor de química de secundaria diagnosticado con cáncer de pulm6n inoperable se dedica a fabricar y vender metanfetamina para asegurar el futuro de su familia.",
    vote_average: 9.5,
    vote_count: 15000,
    release_date: "2008-01-20",
    first_air_date: "2008-01-20",
    media_type: "tv",
    genre_ids: [18, 80],
    original_language: "en",
    popularity: 2200,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/hFzLeuceJ-k",
    featured: true
  },
  {
    id: 5,
    title: "The Avengers",
    name: "The Avengers",
    original_title: "The Avengers",
    poster_path: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop",
    overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    overview_es: "Los héroes más poderosos de la Tierra deben unirse y aprender a luchar como equipo si quieren detener al travieso Loki y su ejército alienígena.",
    vote_average: 8.0,
    vote_count: 28000,
    release_date: "2012-05-04",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    original_language: "en",
    popularity: 2000,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/eOrNdBpGMv8",
    featured: false
  },
  {
    id: 6,
    title: "Superbad",
    name: "Superbad",
    original_title: "Superbad",
    poster_path: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop",
    overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    overview_es: "Dos estudiantes de último año de secundaria dependientes entre sí se ven obligados a enfrentar la ansiedad de separación después de que su plan para organizar una fiesta con alcohol sale mal.",
    vote_average: 7.3,
    vote_count: 12000,
    release_date: "2007-06-15",
    media_type: "movie",
    genre_ids: [35, 80],
    original_language: "en",
    popularity: 900,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/8sY4mHnFKDw",
    featured: false
  },
  {
    id: 7,
    title: "The Conjuring",
    name: "The Conjuring",
    original_title: "The Conjuring",
    poster_path: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1509248961725-aec71c5d2806?w=1920&h=1080&fit=crop",
    overview: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    overview_es: "Los investigadores paranormales Ed y Lorraine Warren trabajan para ayudar a una familia aterrorizada por una oscura presencia en su granja.",
    vote_average: 7.5,
    vote_count: 14000,
    release_date: "2013-07-18",
    media_type: "movie",
    genre_ids: [27, 9648, 53],
    original_language: "en",
    popularity: 1100,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/k10WTZissQI",
    featured: false
  },
  {
    id: 8,
    title: "Titanic",
    name: "Titanic",
    original_title: "Titanic",
    poster_path: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1460881680093-7bc276e71b4c?w=1920&h=1080&fit=crop",
    overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    overview_es: "Una aristocrata de diecisiete años se enamora de un artista amable pero pobre a bordo del lujoso y malhadado R.M.S. Titanic.",
    vote_average: 7.9,
    vote_count: 22000,
    release_date: "1997-12-19",
    media_type: "movie",
    genre_ids: [18, 10749, 53],
    original_language: "en",
    popularity: 950,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/F2prtmPEIEk",
    featured: false
  },
  {
    id: 9,
    title: "Our Planet",
    name: "Our Planet",
    original_title: "Our Planet",
    poster_path: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=1920&h=1080&fit=crop",
    overview: "Documentary series focusing on the breadth of the diversity of animals, habitats and nature.",
    overview_es: "Serie documental centrada en la amplia diversidad de animales, hábitats y naturaleza.",
    vote_average: 9.3,
    vote_count: 5000,
    release_date: "2019-04-05",
    first_air_date: "2019-04-05",
    media_type: "tv",
    genre_ids: [99, 10770],
    original_language: "en",
    popularity: 600,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/aETNYyrXbJk",
    featured: false
  },
  {
    id: 10,
    title: "Interstellar",
    name: "Interstellar",
    original_title: "Interstellar",
    poster_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    overview_es: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    vote_average: 8.6,
    vote_count: 30000,
    release_date: "2014-11-06",
    media_type: "movie",
    genre_ids: [12, 18, 878],
    original_language: "en",
    popularity: 1700,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/zSWdZVtXT7E",
    featured: true
  },
  {
    id: 11,
    title: "Peaky Blinders",
    name: "Peaky Blinders",
    original_title: "Peaky Blinders",
    poster_path: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&h=1080&fit=crop",
    overview: "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps.",
    overview_es: "Una épica familiar de gángsters ambientada en Birmingham, Inglaterra, en 1919, centrada en una banda que cose hojas de afeitar en las puntas de sus gorras.",
    vote_average: 8.8,
    vote_count: 11000,
    release_date: "2013-09-12",
    first_air_date: "2013-09-12",
    media_type: "tv",
    genre_ids: [18, 80],
    original_language: "en",
    popularity: 1900,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/oVzJzdGTjLs",
    featured: false
  },
  {
    id: 12,
    title: "Mad Max: Fury Road",
    name: "Mad Max: Fury Road",
    original_title: "Mad Max: Fury Road",
    poster_path: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=1920&h=1080&fit=crop",
    overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    overview_es: "En un páramo post-apocalíptico, una mujer se rebela contra un ruler tiránico en busca de su tierra natal.",
    vote_average: 8.1,
    vote_count: 20000,
    release_date: "2015-05-13",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    original_language: "en",
    popularity: 1400,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/hEJnMQG9ev8",
    featured: false
  },
  {
    id: 13,
    title: "The Grand Budapest Hotel",
    name: "The Grand Budapest Hotel",
    original_title: "The Grand Budapest Hotel",
    poster_path: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop",
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
    overview_es: "Un escritor conoce al propietario de un hotel de alta gama envejecido, quien le cuenta sus primeros años trabajando como botones.",
    vote_average: 8.1,
    vote_count: 16000,
    release_date: "2014-03-28",
    media_type: "movie",
    genre_ids: [35, 18, 12],
    original_language: "en",
    popularity: 850,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/1Fg5iWmQjwk",
    featured: false
  },
  {
    id: 14,
    title: "A Quiet Place",
    name: "A Quiet Place",
    original_title: "A Quiet Place",
    poster_path: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop",
    overview: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    overview_es: "En un mundo post-apocalíptico, una familia se ve obligada a vivir en silencio mientras se esconde de monstruos con oído ultra-sensible.",
    vote_average: 7.5,
    vote_count: 13000,
    release_date: "2018-04-03",
    media_type: "movie",
    genre_ids: [27, 18, 878],
    original_language: "en",
    popularity: 1200,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/WR7cc5t7tvI",
    featured: false
  },
  {
    id: 15,
    title: "La La Land",
    name: "La La Land",
    original_title: "La La Land",
    poster_path: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop",
    overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
    overview_es: "Mientras navegan por sus carreras en Los Ángeles, un pianista y una actriz se enamoran mientras intentan conciliar sus aspiraciones.",
    vote_average: 8.0,
    vote_count: 14000,
    release_date: "2016-12-08",
    media_type: "movie",
    genre_ids: [35, 10749, 18],
    original_language: "en",
    popularity: 1050,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/0pdqf4P9MB8",
    featured: false
  },
  {
    id: 16,
    title: "Planet Earth II",
    name: "Planet Earth II",
    original_title: "Planet Earth II",
    poster_path: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
    overview: "David Attenborough returns to present the sequels to Planet Earth, featuring different topics.",
    overview_es: "David Attenborough vuelve a presentar las secuelas de Planet Earth, con diferentes temas.",
    vote_average: 9.5,
    vote_count: 6000,
    release_date: "2016-11-06",
    first_air_date: "2016-11-06",
    media_type: "tv",
    genre_ids: [99],
    original_language: "en",
    popularity: 750,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/JCawttzL-H4",
    featured: false
  },
  {
    id: 17,
    title: "The Matrix",
    name: "The Matrix",
    original_title: "The Matrix",
    poster_path: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
    overview: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    overview_es: "Un hacker informáticos descubre la verdadera naturaleza de la realidad y su papel en la guerra contra sus controladores.",
    vote_average: 8.7,
    vote_count: 24000,
    release_date: "1999-03-30",
    media_type: "movie",
    genre_ids: [28, 878],
    original_language: "en",
    popularity: 1550,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/vKQi3bBA1y8",
    featured: false
  },
  {
    id: 18,
    title: "Money Heist",
    name: "Money Heist",
    original_title: "La Casa de Papel",
    poster_path: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1920&h=1080&fit=crop",
    overview: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police.",
    overview_es: "Ocho ladrones toman rehenes y se encierran en la Casa de la Moneda de España mientras un maestro criminal manipula a la policía.",
    vote_average: 8.3,
    vote_count: 18000,
    release_date: "2017-05-02",
    first_air_date: "2017-05-02",
    media_type: "tv",
    genre_ids: [80, 18],
    original_language: "es",
    popularity: 2100,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/To_kVMMu-Lw",
    featured: true
  },
  {
    id: 19,
    title: "Squid Game",
    name: "Squid Game",
    original_title: "Squid Game",
    poster_path: "https://images.unsplash.com/photo-1635479261119-dc7d08c692d5?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1636622433525-f1f3f29c6c31?w=1920&h=1080&fit=crop",
    overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    overview_es: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    vote_average: 8.0,
    vote_count: 16000,
    release_date: "2021-09-17",
    first_air_date: "2021-09-17",
    media_type: "tv",
    genre_ids: [18, 10765, 53],
    original_language: "ko",
    popularity: 2800,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/oqxfnKkrwzc",
    featured: true
  },
  {
    id: 20,
    title: "The Crown",
    name: "The Crown",
    original_title: "The Crown",
    poster_path: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=600&fit=crop",
    backdrop_path: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1920&h=1080&fit=crop",
    overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    overview_es: "Sigue las rivalidades políticas y el romance del reinado de la Reina Isabel II y los eventos que configuraron la segunda mitad del siglo XX.",
    vote_average: 8.4,
    vote_count: 5000,
    release_date: "2016-11-04",
    first_air_date: "2016-11-04",
    media_type: "tv",
    genre_ids: [18, 99],
    original_language: "en",
    popularity: 1300,
    adult: false,
    trailer_url: "https://www.youtube.com/embed/JWtn-sk5JoI",
    featured: false
  }
];

/**
 * Obtiene películas por categoría
 * @param {string} category - Categoría de películas
 * @returns {Array} Array de películas filtradas
 */
export const getMoviesByCategory = (category) => {
  const categories = {
    trending: (movie) => movie.popularity > 1500,
    toprated: (movie) => movie.vote_average >= 8.0,
    action: (movie) => movie.genre_ids.includes(28),
    comedy: (movie) => movie.genre_ids.includes(35),
    horror: (movie) => movie.genre_ids.includes(27),
    romance: (movie) => movie.genre_ids.includes(10749),
    documentary: (movie) => movie.genre_ids.includes(99),
    originals: (movie) => movie.media_type === 'tv',
    popular: (movie) => movie.popularity > 800 && movie.popularity <= 1500
  };

  const filter = categories[category];
  return filter ? moviesData.filter(filter) : moviesData;
};

/**
 * Obtiene películas destacadas para el banner
 * @returns {Object} Película destacada
 */
export const getFeaturedMovie = () => {
  const featured = moviesData.filter(movie => movie.featured);
  const random = featured[Math.floor(Math.random() * featured.length)];
  return random || moviesData[0];
};

/**
 * Obtiene una película por ID
 * @param {number} id - ID de la película
 * @returns {Object|null} Película encontrada
 */
export const getMovieById = (id) => {
  return moviesData.find(movie => movie.id === id) || null;
};

export const getTrendingMovies = () => getMoviesByCategory('trending');
export const getTopRated = () => getMoviesByCategory('toprated');
export const getActionMovies = () => getMoviesByCategory('action');
export const getComedyMovies = () => getMoviesByCategory('comedy');
export const getHorrorMovies = () => getMoviesByCategory('horror');
export const getRomanceMovies = () => getMoviesByCategory('romance');
export const getDocumentaries = () => getMoviesByCategory('documentary');

/**
 * Busca películas por título
 * @param {string} query - Texto de búsqueda
 * @returns {Array} Array de películas que coinciden
 */
export const searchMovies = (query) => {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  return moviesData.filter(movie => 
    movie.title.toLowerCase().includes(lowerQuery) ||
    movie.name.toLowerCase().includes(lowerQuery)
  );
};

export default moviesData;
