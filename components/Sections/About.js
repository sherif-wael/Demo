import React from "react";
import styled, { css } from "styled-components";
import { useLanguage } from "../LanguageProvider";
import { clipText } from "../../lib/helpers";
import { SectionHeader } from "../Common";


const AboutSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    max-width: 1600px;
    margin: 0 auto 80px;

    @media (min-width: 1024px){
        grid-template-columns: 1fr 1fr;
    }
`

const AboutContent = styled.article`
    padding: 0 24px;
    color: var(--primary-color);

    .about-header{
        text-transform: uppercase;
    }

    p{
        line-height: 1.45;
        font-weight: 500;    
    }

    .expand-btn{
        color: var(--secondary-color);
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 0 5px;
        cursor: pointer;
    }

    ${props => (
        props.rightSideImage &&
        css`
            @media (min-width: 1024px){
                order: 1;
            }
        `
    )}

    @media (min-width: 768px){
        padding: 0 32px;
    }
`

const AboutImage = styled.div`
    min-height: 300px;
    background: url(${props => props.img}) no-repeat center / cover;
    
    ${props => (
        props.rightSideImage &&
        css`
            @media (min-width: 1024px){
                order: 0;
            }
        `
    )}
`




function About({name, img, rightSideImage}){
    const [isClipped, setIsClipped] = React.useState(true);
    const {t} = useLanguage();

    const content = isClipped ? clipText(t(`${name}.desc`), 700) : t(`${name}.desc`);
    const clipped = t(`${name}.desc`).length > 700;

    const expandButton = clipped && (
        <span  className ="expand-btn"
                onClick={() => setIsClipped(!isClipped)}
            >
                {isClipped ? t("btn.more") : t("btn.less")}
        </span>
    );

    return (
        <AboutSection id={name}>
            <AboutContent rightSideImage={rightSideImage}>
                <SectionHeader className="about-header">{t(`${name}.header`)}</SectionHeader>

                <div>
                    {
                        content.split("\n").map((line, i, arr) => (
                            <p key={i}>
                                {line}
                                {i === arr.length - 1 && expandButton}
                            </p>
                        ))
                    }
                </div>
            </AboutContent>

            <AboutImage img={img} rightSideImage={rightSideImage} />
        </AboutSection>
    )
}

export default About