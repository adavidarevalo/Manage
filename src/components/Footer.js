import React from 'react'
import { Link } from 'gatsby'
import logoWhite from '../images/logoWhite.svg'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";


const Footer = () => {
    return(
        <footer>
            <section>
                <form>
                    <input type='text' placeholder='Updates in your inbox'/>
                    <button>Go</button>
                </form>
                <article>
                    <div className='FooterList'>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>Pricing</Link></li>
                            <li><Link>Products</Link></li>
                            <li><Link>About Us</Link></li>
                        </ul>
                        <ul>
                            <li><Link>Careers</Link></li>
                            <li><Link>Community</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className='SocialContainer'>
                        <img src={logoWhite} alt='Logo'/>
                        <div>
                            <AiFillFacebook/>
                            <AiFillYoutube/>
                            <AiOutlineTwitter/>
                            <BsPinterest/>
                            <AiFillInstagram/>
                        </div>
                    </div>
                </article>
            </section>
        </footer>
    )
}

export default Footer