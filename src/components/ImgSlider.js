import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImgSlider = (props) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return ( 
        <Carousel {...settings}>
            <Wrap>
                <a>
                  <ImageGradient>
                  </ImageGradient>
                <ContentHolder>
                    <ContentTitle>
                      Docter Strange in the Multiverse of Madness
                    </ContentTitle>
                    <TopTitle>
                      <span>Superhero<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>2022</span>
                    </TopTitle>
                    <ContentDesc>
                      When the Multiverse is unlocked, Docter Strange must enlist help from old and new allies in order to confront a surprising adversary.
                    </ContentDesc>
                  </ContentHolder>
                <img src="/images/multiverse.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <ImageGradient>
                  </ImageGradient>
                  <ContentHolder>
                    <ContentTitle>
                      Ms. Marvel
                    </ContentTitle>
                    <TopTitle>
                      <span>Marvel<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>Superhero</span>
                    </TopTitle>
                    <ContentDesc>
                      Kamala Khan, a Muslim American teen growing up in Jersey City, is a Superhero mega fan who discovers she has super powers.
                    </ContentDesc>
                  </ContentHolder>
            <img src="/images/msmarvel.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <ImageGradient>
                  </ImageGradient>
                <ContentHolder>
                    <ContentTitle>
                      Bluey
                    </ContentTitle>
                    <TopTitle>
                      <span>Disney<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>English<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>Kids</span>
                    </TopTitle>
                    <ContentDesc>
                      Bluey is an inexhaustible six year-old Blue Heeler dog, who loves to play and turns everyday family life into extraordinary adventures.
                    </ContentDesc>
                  </ContentHolder>
                <img src="/images/bluey.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <ImageGradient>
                  </ImageGradient>
                  <ContentHolder>
                    <ContentTitle>
                      Big Mouth
                    </ContentTitle>
                    <TopTitle>
                      <span>Select picks<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>Korean<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>Action</span>
                    </TopTitle>
                    <ContentDesc>
                    NEW EPISODES EVERY FRIDAY & SATURDAY AT 8:00 PM. A lawyer, caught up in a murder case, becomes a notorious and genius con artist overnight, in order to fight against a huge conspiracy and survive.
                    </ContentDesc>
                  </ContentHolder>
            <img src="/images/mouth.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <ImageGradient>
                  </ImageGradient>
                <ContentHolder>
                    <ContentTitle>
                      She-Hulk: Attorney at Law
                    </ContentTitle>
                    <TopTitle>
                      <span>Marvel<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span> Superhero</span>
                    </TopTitle>
                    <ContentDesc>
                      NEW EPISODES EVERY THURSDAY AT 12:30 PM. <br/>
                      Jennifer Walters, an attorney specialising in superhuman-oriental legal cases, must navigate the complicated life of a single, green 6-foot-7inch hulk.
                    </ContentDesc>
                  </ContentHolder>
                <img src="/images/hulk.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <ImageGradient>
                  </ImageGradient>
                  <ContentHolder>
                    <ContentTitle>
                      Lightyear
                    </ContentTitle>
                    <TopTitle>
                      <span>Action<FontAwesomeIcon className="fonticon" icon={faCircle}/></span>
                      <span>2022</span>
                    </TopTitle>
                    <ContentDesc>
                    The origin story of Buzz Lightyear follows the space ranger on an intergalactic adventure, alongside a group of ambitious recruits, and his robot companion Sox.
                    </ContentDesc>
                  </ContentHolder>
            <img src="/images/ligthyear.jpg" alt="" />
                </a>
            </Wrap>

        </Carousel>
    )
}

const Carousel = styled(Slider)`
  padding-top: 5px;
    width: 94%;
    margin: 0 3%;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 20px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  padding-top: 40px;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  position: relative;
  a {
    background-color: #030b17;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    position: relative;
    img {
      width: 60%;
      height: 100%;
      border-radius: 4px;

      @media screen and (max-width: 1200px){
        width: 100%;
      }
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

const ContentHolder = styled.div`
  width: 40%;
  padding-left: 50px; 
  padding-right: 20px;
  padding-top: 50px;
  display: flex; 
  flex-direction: column;

  @media screen and (max-width: 1200px){
    position: absolute;
    width: 60%;
    z-index: 2;
  }

  @media screen and (max-width: 726px){
    margin-top: -30px;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

`;

const ContentTitle = styled.h2`
font-size: 28px;
font-weight: 600;
line-height: 1.4;

@media screen and (max-width: 726px){
  font-size: 24px;
}
`;

const TopTitle = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
    height: 16px;
    margin-top: -10px;
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

const ContentDesc = styled.div`
margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;

    @media screen and (max-width: 726px){
      font-size: 12px;
    }
`;

export default ImgSlider;