import styled from "styled-components";

const Viewers = (props) => {
    return(
        <Container>
            <Wrap>
                <img src="/images/viewers/viewers-disney.png"/>
                <video playsInline={true} autoPlay={true} loop={true}>
                    <source src="/images/viewers/disney-v2.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers/viewers-pixar.png"/>
                <video playsInline={true} autoPlay={true} loop={true}>
                    <source src="/images/viewers/pixar-v1.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers/viewers-marvel.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/images/viewers/marvel-v1.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers/viewers-starwars.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/images/viewers/starwars-v1.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers/viewers-national.png"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/images/viewers/national-v1.mp4" type="video/mp4" />
                </video>
            </Wrap>
            
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10px;
    padding: 5px 30px;
    display: grid;
    grid-gap: 15px;
    gap: 15px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px){
        padding: 8px 5px;
        gap: 5px;
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s
    border: none;
    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        transform: scale(1.05);

        img{
            opacity: 0;
            z-index: -1;
            transition: opacity 1s;
        }

        video{
            opacity: 1;
            z-index: 1;
            transition: opacity 1s;
        }
    }

    @media (max-height: 768px){
        border-radius: 4px;
    }

`;

export default Viewers;