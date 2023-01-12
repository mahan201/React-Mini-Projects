import PokemonView from "./components/PokemonView/PokemonView";
import "./App.css";
import { Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const glass = {
    background: "rgba(255, 255, 255, 0.44)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6.3px)",
    WebkitBackdropFilter: "blur(6.3px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
}

const CustomPagination = styled(Pagination)({
  '& .MuiPaginationItem-root' : {
    color: 'white'
  },
  '& .MuiPaginationItem-root:hover': {
    ...glass,
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    ...glass,
    background: "rgba(255, 255, 255, 0.66)",
    color: 'black'
  }
  
});

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon"

function App() {
  const [pageValue, setPageValue] = useState(1);
  const [limit, setLimit] = useState(8);
  const [count, setCount] = useState(100);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    //Use axios to fetch data
    axios.get(`${API_ENDPOINT}?limit=${limit}&offset=${pageValue * limit}`)
      .then(({data}) => {
        setCount(data.count);
        setPokemons(data.results);

      })
      .catch((err) => {
        
      });
  },[pageValue,limit])

  return (
    <div className="App">
      <div className="title-container">
        <Typography variant="h3" sx={{ color: "white" }}>
          Pokemons
        </Typography>
      </div>
      {pokemons.map((pokemon) => ( 
        <PokemonView key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))
      }
      <CustomPagination
        count={Math.floor(count / limit)}
        defaultPage={1}
        onChange={(e, p) => setPageValue(p)}
      />
    </div>
  );
}

export default App;
