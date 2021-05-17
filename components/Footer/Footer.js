import styled from "styled-components";
import { useLanguage } from "../LanguageProvider";
import { contactLinks } from "../../lib/constants";

const FooterWrapper = styled.footer`
    background-color: var(--primary-color);
    color: #fff;
    padding-top: 40px;
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    max-width: 1200px;
    margin: 0 auto 10px;
    font-size: 14px;

    @media (min-width: 680px){
        padding: 0 32px;
        flex-direction: row;
        justify-content: space-between;
    }
`

const FooterDesc = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 30px 0;
    max-width: 520px;

    .logo{
        width: 48px;
        height: 48px;
        margin-right: 16px;

        @media (min-width: 680px){
            width: 80px;
            height: 80px;
        }
    }

    .desc{
        margin: 0;
    }
`

const ContactLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin: 0 0 10px 0;
    }

    .icon{
        width: 16px;
        height: 16px;
    }

    @media (min-width: 680px){
        align-items: flex-start;

        p{
            margin: 0 0 15px 0;
        }
    }
`

const CreditParagraph = styled.p`
    text-align: center;
    background-color: var(--secondary-color);
    padding: 8px;
    margin: 0 auto;
    max-width: 500px;

    strong{
        font-weight: 600;
    }
`

function Footer(){
    const {t} = useLanguage();

    return (
        <FooterWrapper>
            <FooterContent>
                <FooterDesc>
                    <img src="/images/logo.png" alt="logo" className="logo" />

                    <p className="desc">{t("footer.desc")}</p>
                </FooterDesc>
                <ContactLinks>
                    <p>{t("footer.contact")}</p>

                    <div className="icons">
                        {
                            contactLinks.map(({href, icon}, i) => (
                                <a href={href} key={i}>
                                    <img className="icon" src={icon} alt="contact icon" />
                                </a>
                            ))
                        }
                    </div>
                </ContactLinks>
            </FooterContent>

            <CreditParagraph>
                Powered by <strong>SHOPLESS</strong>
            </CreditParagraph>
        </FooterWrapper>
    )
}


export default Footer;