import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocailIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocailIcons>
                            <SocialIconLink href="/" target="_blank"
                            arial-label= "FaceBook" rel="noopener noreferrer">
                                <FaFacebook />

                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            arial-label= "Instagram" rel="noopener noreferrer">
                                <FaInstagram />

                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            arial-label= "Youtube" rel="noopener noreferrer">
                                <FaYoutube />

                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            arial-label= "Twitter" rel="noopener noreferrer">
                                <FaTwitter />

                            </SocialIconLink>
                        </SocailIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
