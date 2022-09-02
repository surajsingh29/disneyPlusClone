import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { auth, provider } from "../firebase";
import { setUserLoginDetails, selectUserName, selectUserPhoto, setSignOutState } from '../features/user/userSlice'
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history.pushState('/home')
            }
        })
    },[userName])

    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                console.log(error)
            });
        }else if(userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push("/")
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    return (
        <Nav>
            <FontAwesomeIcon className="barIcon" icon={faBars}/>
            <Logo>
                <img src='/images/logo.svg' alt="Logo" />
            </Logo>
            <NavMenu>
                <a href="/tv">
                    <span>TV</span>
                </a>
                <a href="/movies">
                    <span>Movies</span>
                </a>
                <a href="/sports">
                    <span>Sports</span>
                </a>
                <a href="/home">
                    <span><p>Disney+</p></span>
                </a>

                <a href="/kids">
                    <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="" />
                </a>
            </NavMenu>
            <Input>
                <input type="text" placeholder="Search" />
            </Input>
            <Subscribe>
                SUBSCRIBE
            </Subscribe>
            {!userName ? (<Login onClick={handleAuth}>Login</Login>)
            :
            (
                <SignOut>
                    <UserImg src={userPhoto} alt={userName}/>
                    <DropDown>
                        <span onClick={handleAuth}>Sign out</span>
                    </DropDown>
                </SignOut>
            )}
        </Nav>
    )
}

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    background-color: #141620;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 3;

    .barIcon{
        padding-right: 10px;
        cursor: pointer;
    }
`;

const Logo = styled.a`
    padding: 0;
    width: 120px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
        margin-top: -10px;
        cursor: pointer;
    }
`;


const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row no-wrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        span{
            color: #dadada;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;

            &:hover{
                color: white;
            }

            p{
                font-weight: 550;
                color: white;
            }
        }

    }

    @media (max-width: 768px) {
        display: none;
    }

    img{
        margin-top: -5px;
    }
`;

const Login = styled.a`
    font-size: 14px;
    cursor: pointer;
    color: #dadada;
    font-weight: bold;
    padding-left: 20px;

`;

const Subscribe = styled.a`
    cursor: pointer;
    font-size: 12px;
    padding: 5px 10px;
    background-color: #1f80e0;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 20px;
    @media (max-width: 768px) {
        display: none;
    }

    &:hover{
        background-color: #0483ee;
    }
`;

const Input = styled.div`
    input{
        position: relative;
        width: 240px;
        height: 32px;
        border: none;
        border-bottom: 1px solid #dadada;
        color: #dadada;
        font-size: 16px;
        font-weight: 400;
        outline: 0;
        padding: 0 28px 0 0px;
        border-radius: 0;
        background: none;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        opacity: 1;

        &:focus{
            width: 360px;
            border-bottom: 1px solid #1f80e0;
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const UserImg = styled.img`
    height: 100%;
    border-radius: 50%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    width: 100px;
    background-color: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    padding: 10px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
    font-size: 14px;
    letter-spacing: 3px;
    opacity: 0;
`;

const SignOut = styled.div`
    height: 58px;
    width: 58px;
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;