import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Footer = (props) => {
    return(
        <FooterContainer>
            <Footer_content>
                <Footer_left>
                    <Link_section>
                        <span>About Disney+ Hotstar</span>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>FAQ</span>
                        <span>Feedback</span>
                        <span>Careers</span>
                    </Link_section>
                    <Copyright_Section>
                    <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
                    </Copyright_Section>
                </Footer_left>
                <Footer_Right>
                    <Social_content>
                        <Social_head>
                            <span>Connect with us</span>
                        </Social_head>
                        <Social_Icons>
                            <a href="https://www.facebook.com/DisneyPlusHotstar" target="_blank"><img src="/images/square-facebook-brands.svg" alt="" /></a>
                            <a href="https://twitter.com/DisneyPlusHS" target="_blank"><img src="/images/square-twitter-brands.svg" alt="" /></a>
                        </Social_Icons>
                    </Social_content>
                    <Mobile_App>
                        <Mobile_head>
                            <span>Disney+ Hotstar App</span>
                        </Mobile_head>
                        <Mobile_Buttons>
                            <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="" /></a>
                            <a href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"><img src="/images/viewers/apple.svg" alt="" /></a>
                        </Mobile_Buttons>
                    </Mobile_App>
                </Footer_Right>
            </Footer_content>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    background: #0c111b;
    padding: 30px;

    span{
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
    }

    img{
        height: 50px;
    }
`;


const Footer_left = styled.div`
    width: 50%;
`;

const Footer_Right = styled.div`
width: 50%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const Link_section = styled.div`
    display: flex;
    flex-wrap: wrap;
    span{
        margin-right: 20px;
        cursor: pointer;

        &:hover{
            color: #1f80e0;
        }
    }
`;

const Copyright_Section = styled.div`
padding-right: 50px;
    p{
        font-size: 11.2px;
        line-height: 1.4;
    }
`;

const Social_content = styled.div`
    width: 50%;
`;

const Social_head = styled.div`
    margin-bottom: 5px;
`;

const Social_Icons = styled.div`
    display: flex;
    img{
        margin-right: 5px;
        padding: 0 2px;
        transition: 0.4s ease-out;
        
        &:hover{
            background-color: white;
            border-radius: 4px;
        }
    
    }
`;

const Mobile_App = styled.div`
    width: 50%;
`;

const Mobile_head = styled.div`
    margin-bottom: 5px;
`;

const Mobile_Buttons = styled.div`
    display: flex;
    img{
        width: 120px;
        margin-right: 5px;
    }
`;


const Footer_content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 868px){
        display: grid;
        grid: 1fr;
        
        ${Footer_left}{
            width: 100%;
        }
        ${Footer_Right}{
            width: 100%;
        }
    }
`;

export default Footer;