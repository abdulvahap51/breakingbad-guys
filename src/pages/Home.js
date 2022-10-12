import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { additem,addcharacter } from "../redux/charactersaction";
import Masonry from "react-masonry-css";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

export default function Home() {
  const characters = useSelector((state) => state.characters.items);
  const page = useSelector((state) => state.characters.page);
  const deger = useSelector((state) => state.characters.deger);
  const deger2 = useSelector((state) => state.characters.deger2);

  const dispatch = useDispatch();
  const charlimit = 12;
  
  useEffect(() => {
// dispatch(addcharacter())
    if(deger2===0){
        fetch(
            `https://www.breakingbadapi.com/api/characters?limit=${charlimit}&offset=${
              charlimit * page
            }`
          )
            .then((res) => res.json())
            .then((data) => dispatch(additem(data)));
    }
  }, []);
  console.log(characters);
  const yenidegerler = () => {
    fetch(
      `https://www.breakingbadapi.com/api/characters?limit=${
        charlimit * (page + 1)
      }&offset=0`
    )
      .then((res) => res.json())
      .then((data) => dispatch(additem(data)));
  };

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((characters) => (
          <div key={characters.char_id}>
            <Link to={`char/${characters.char_id}`}>
            <img
              className="stillendir"
              alt={characters.name}
              src={characters.img}
            ></img>
            <h1>{characters.name}</h1>
            </Link>
          </div>
        ))}
      </Masonry>
      <div className="textcenter">
        <button
          className="buyut"
          onClick={() => {
            if (page === 6) {
              alertify.error("no more character");
            } else {
              yenidegerler();
            }
          }}
        >
          {deger}
        </button>
      </div>
      <br></br>
    </div>
  );
}
