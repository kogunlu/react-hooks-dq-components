import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {

  const AlbumCards = albums.map( (album) => {
    return (
    <AlbumCard name = {album.name} image = {album.image} genre = {album.genre} key = {album.id} />
    )
  })
  console.log(AlbumCards)
  return (
    <section className="albums">
      {AlbumCards}
    </section>
  );
}

export default AlbumList;
