import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addcharacter } from "../redux/charactersaction";
import { CardImg, Col, Container, Row, ListGroup,ListGroupItem} from "reactstrap";

export default function Details() {
  const { char_id } = useParams();
  const character = useSelector((state) => state.characters.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addcharacter(""))
    fetch(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.json())
      .then((data) => dispatch(addcharacter(data[0])));
  }, [char_id]);

  console.log(character);
  console.log(char_id);
  return (
    <div>
      {character !==""  ?
       (<div className="renk">
       <Container >
         <Row className="text-center">
           <Col sm="6" >
           <CardImg src={character.img}></CardImg>
           </Col>
           <Col className="buyuttt" sm="6">
             <br></br>
             
             
             
           <p>{character.name}</p>
           <p>({character.nickname})</p>
           <h1>portrayed:{character.portrayed}</h1> 
           
           
           </Col>
         </Row>
       </Container>
       
     </div>):(<div><Container className="loading"><h1>Loading</h1></Container></div>)
      
      
      }
    
    </div>
  );
}
