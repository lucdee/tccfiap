import React, { useState } from "react";
import Layout from "./Layout";
import { FaMapMarkerAlt } from "react-icons/fa";
import * as S from '../styles/styled-components/styles';

const Map = () => {
  const [isLocal1, setIsLocal1] = useState(false);
  const [isLocal2, setIsLocal2] = useState(false);
  const [isLocal3, setIsLocal3] = useState(false);
  const [isLocal4, setIsLocal4] = useState(false);
  const [isLocal5, setIsLocal5] = useState(false);
  const [isLocal6, setIsLocal6] = useState(false);

 
console.log(isLocal1)
  return (
    <>

    <S.Container >
   
      <S.Search >
      {isLocal1 && <h1  style={{ position:"absolute" }} >Local 1</h1>}
      {isLocal2 && <h1  style={{ position:"absolute" }} >Local 2</h1>}
      {isLocal3 && <h1  style={{ position:"absolute" }} >Local 3</h1>}
        <S.S1 isLocal1={isLocal1} onClick={() =>setIsLocal1(!isLocal1) & setIsLocal2(false) & setIsLocal3(false)}>
        <FaMapMarkerAlt  size="70"   style={{ margin: '200px 0 0 700px', position:"absolute" }} />
        </S.S1>
        <S.S2 isLocal2={isLocal2} onClick={() =>setIsLocal2(!isLocal2) & setIsLocal1(false) & setIsLocal3(false)}>
        <FaMapMarkerAlt size="70" style={{ margin: '20px 0 0 500px', position:"absolute" }}/>
        </S.S2>
        <S.S2 isLocal2={isLocal3} onClick={() =>setIsLocal3(!isLocal3) & setIsLocal1(false)  & setIsLocal2(false)}>
        <FaMapMarkerAlt size="70" style={{ margin: '500px 0 0 800px', position:"absolute" }}/>
        </S.S2>
       
      </S.Search>
    <img style={{ height: '100%', width: '80%', margin:"0" , minHeight: "100vh", }} src="mapa.jpg"></img>
    </S.Container>
   
     
    </>
  );
};

export default Map;
