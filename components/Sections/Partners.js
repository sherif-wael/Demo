import styled from "styled-components";
import { SectionHeader } from "../Common";
import { partners } from "../../lib/constants";
import { useLangauge, useLanguage } from "../LanguageProvider";

const PartnersSection = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 24px;
    margin-bottom: 60px;

    @media (min-width: 768px){
        padding: 0 32px;
    }
`

const LogoWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;

    ::-webkit-scrollbar {
        height: 5px;
    }
      
    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }
      
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: hsl(0deg, 0%, 80%);
    }
      
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    // justify-content: center;
    // grid-gap: 25px;

    .logo{
        height: 120px;
        flex-shrink: 0;
        display: inline-block;

        margin-right: 20px;

        img{
            height: 100%;
        }
    }

`


function Partners(){
    const {t} = useLanguage();
    
    return (
        <PartnersSection id="partners">
            <SectionHeader>{t("partners.header")}</SectionHeader>

            <LogoWrapper>
                {
                        partners.map((l, i) => (
                            <div className="logo" key={i}>
                                <img src={l} alt={l} />
                            </div>
                    ))
                }
            </LogoWrapper>
        </PartnersSection>
    )
}

export default Partners