import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLearning } from "../features/movie/movieSlice";

const Learning = (props) => {
  const movies = useSelector(selectLearning);
  console.log(movies, ":🛢️");

  return (
    <Content>
      {movies &&
          movies.map((movie, key) => (
            <a href="/" key={key}>
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </a>
      ))}
    </Content>
  );
};

const Content = styled.div`
  padding: 30px 0px;
  margin-left: 25px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar{
        display: none;
    }

    img{
        max-height: 200px;
        padding: 5px;
        object-fit: contain;
        transition: transform 450ms;
        border-radius: 10px;
        
        &:hover{
            transform: scale3d(1.3, 1.3, 1) translate3d(11%, 0, 0) perspective(500px);
            z-index: 4;
            opacity: 1;
        }
    }
`;

export default Learning;