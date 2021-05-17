import styled from "styled-components";
import { useLanguage } from "../LanguageProvider";


const HeroSeciton = styled.section`
    position: relative;
    background: url("/images/home.jpg") no-repeat center / cover;
    min-height: 370px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 60px;

    &::after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.1);
    }

    @media (min-width: 1024px){
        margin-bottom: 80px;
    }
`

const HeroHeader = styled.h2`
    padding: 20px 16px;
    background-color: var(--secondary-color);
    color: #fff;
    z-index: 2;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 32px;
    margin: 0 0 80px;
    font-family: Roboto, "sans-serif";
    letter-spacing: 0.4px;
    width: 340px;

    @media (min-width: 768px){
        margin: 0 0 0 50px;
        width: 420px;
    }
`


function Hero(){
    const {t} = useLanguage();
    return (
        <HeroSeciton>
            <HeroHeader>
                {t("hero.desc")}
            </HeroHeader>
        </HeroSeciton>
    )
}

export default Hero;