import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  

  return (
    <Container>
      <a href="/">
      <ImageGradient></ImageGradient>
      <ContentMeta>
        <p>SUBSCRIBER</p>
        <Title>{detailData.title}</Title>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Watch Movie</span>
          </Trailer>
      </ContentMeta>

        <img alt={detailData.title} src={detailData.backgroundImg} />

      </a>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 4px;
  top: 85px;
  width: 92%;
  height: 400px;
  margin: 0 4%;
  cursor: pointer;
  position: absolute;
  a {
    background-color: #030b17;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    position: relative;
  }
    a > img {
      margin-left: 40%;
      width: 60%;
      height: 400px;
      border-radius: 4px;

      @media screen and (max-width: 1200px){
        width: 100%;
      }
    }
`;

const ImageGradient = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  // background-color: red;
  right: calc(60% - 200px);
  height: 100%;
  width: 200px;
  content: '';
  transition: background 0.3s ease-in;
  background: linear-gradient(to right, #030b17 , rgba(0, 0, 0, 0));

  @media screen and (max-width: 1200px){
    left: 0;
    right: auto;
  }
`;


const ContentMeta = styled.div`
width: 50%;
padding-left: 50px; 
padding-right: 20px;
padding-top: 50px;
display: flex;
position: absolute; 
flex-direction: column;
z-index: 2;

@media screen and (max-width: 1200px){
  position: absolute;
  width: 60%;
  
}

@media screen and (max-width: 726px){
  margin-top: -30px;
  position: absolute;
  width: 100%;
  z-index: 2;
}
`;


const Trailer = styled.div`
  font-size: 15px;
  margin-top: 30px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  // justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: transparent;
  border: none;
  color: rgb(249, 249, 249);
`;

const Title = styled.div`
font-size: 28px;
font-weight: 600;
line-height: 1.4;

@media screen and (max-width: 726px){
  font-size: 24px;
}
`;

const SubTitle = styled.div`
display: flex;
// justify-content: center;
align-items: center;
  height: 16px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
.fonticon{
  margin-bottom: 4px; 
  padding: 0 5px;
  font-size: 4px;
}

@media screen and (max-width: 726px){
  font-size: 12px;
}
`;

const Description = styled.div`
margin-top: 20px;
font-size: 16px;
font-weight: 500;
color: rgba(255, 255, 255, 0.8);
line-height: 1.4;

@media screen and (max-width: 726px){
  font-size: 12px;
}
`;

export default Detail;