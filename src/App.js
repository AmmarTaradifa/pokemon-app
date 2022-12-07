import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon-app" element={<PokemonList />} />
        <Route path="/detail/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
