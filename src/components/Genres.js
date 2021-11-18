// import { Chip } from "@material-ui/core";
// import { axios } from "axios";
// import { useEffect } from "react";

// const Genres = ({
//     selectedGenres,
//     setSelectedGenres,
//     genres,
//     setGenres,
//     type,
//     setPage,
//   }) => {

//     const handleAdd = (genre) => {
//         setSelectedGenres([...selectedGenres, genre]);
//         setGenres(genres.filter((g) => g.id !== genre.id));
//         setPage(1);
//       };
    
//       const handleRemove = (genre) => {
//         setSelectedGenres(
//           selectedGenres.filter((selected) => selected.id !== genre.id)
//         );
//         setGenres([...genres, genre]);
//         setPage(1);
//       };

//     const fetchGenres = async () => {
//         const { data } = await axios.get(
//           `https://api.themoviedb.org/3/genre/${type}/list?api_key=2c5532cc95c67dd780cc023d68ba241a&language=en-US`
//         );
//         setGenres(data.genres);
//       };
    
//       useEffect(() => {
//         fetchGenres();
    
//         return () => {
//           setGenres({}); // unmounting
//         };
      
//         // eslint-disable-next-line
//       }, []);


//     return (
//         <div style={{ padding: "6px 0" }}>

//         {  selectedGenres && selectedGenres.map((genre) => (
//           <Chip
//             style={{ margin: 2 }}
//             label={genre.name}
//             key={genre.id}
//             color="primary"
//             clickable
//             size="small"
//             onDelete={() => handleRemove(genre)}
//           />
//         ))}

//         { genres && genres.map((genre) => (
//           <Chip
//             style={{ margin: 2 }}
//             label={genre.name}
//             key={genre.id}
//             clickable
//             size="small"
//             onClick={() => handleAdd(genre)}
//           />
//         ))}
//       </div>
//     )
// }

// export default Genres


import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=2c5532cc95c67dd780cc023d68ba241a&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;