import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import DisneyOriginals from './DisneyOriginals';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import Teenage from "./Teenage";
import AroundWorld from "./AroundWorld";
import Celebrate from "./Celebrate";
import Siblings from "./Siblings";
import Groot from "./Groot";
import Latest from "./Latest";
import Learning from "./Learning";
import Footer from "./Footer";


const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let groots = [];
    let celebrates = [];
    let teenages = [];
    let siblings = [];
    let aroundworlds = [];
    let learnings = [];

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {

            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "groot":
                groots = [...groots, { id: doc.id, ...doc.data() }];
                break;

              case "celebrate":
                celebrates = [...celebrates, { id: doc.id, ...doc.data() }];
                break;
              
              case "teenage":
                teenages = [...teenages, { id: doc.id, ...doc.data() }];
                break;

              case "sibling":
                siblings = [...siblings, { id: doc.id, ...doc.data() }];
                break;

              case "aroundworld":
                aroundworlds = [...aroundworlds, { id: doc.id, ...doc.data() }];
                break;

              case "learning":
                learnings = [...learnings, { id: doc.id, ...doc.data() }];
                break;
            }
          });
    
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              groot: groots,
              teenage: teenages,
              aroundWorld: aroundworlds,
              siblings: siblings,
              celebrateInd: celebrates,
              learning: learnings,
            })
          );
        });
      }, [userName]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Heading>Recommended For You</Heading>
            <Recommends/>
            <Heading>Disney+ Originals</Heading>
            <DisneyOriginals />
            <Heading>Teenage Adventures</Heading>
            <Teenage/>
            <Heading>Stories from Around the World</Heading>
            <AroundWorld/>
            <Heading>Celebrating India</Heading>
            <Celebrate/>
            <Heading>Lovely Siblings</Heading>
            <Siblings/>
            <Heading>I am Groot</Heading>
            <Groot/>
            <Heading>Latest on Disney+</Heading>
            <Latest/>
            <Heading>Learning Made Fun</Heading>
            <Learning/>

            <Footer/>

        </Container>

    )
}

const Container = styled.main`
    position: absolute;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    display: block;
    top: 80px;
    padding: 0 calc(3.5w + 5px);

    &:after{
        background: linear-gradient(to bottom, #141b29, #0c111b 300px);
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

const Heading = styled.h3`
    margin-left: 30px;
    margin-bottom: -10px;
`;

export default Home;