import { InfoContactTopData } from "@/data/layout/infocontacttop";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


export const FooterComponent: FC = () => {

    return (
        <div className="footercomponent">
            <div className="footercomponent__container">
                <div className="footercomponent__section">
                    <div className="footercomponent__title">Locations</div>
                    {
                        InfoContactTopData.map((data) => (
                            <>
                                <div className="footercomponent__text">{data.name}, NY</div>
                                <a 
                                    href={data.locationLink} 
                                    target="_blank" 
                                    className="footercomponent__link">{data.locationName}</a>
                                <a 
                                    href={`tel:+${data.number}`} 
                                    className="footercomponent__link">{data.numberVisible}</a>
                            </>
                        ))
                    }
                </div>

                <div className="footercomponent__section">
                    <div className="footercomponent__title">Commercial Services</div>
                    {/* <Link 
                        href="/service/roofing" 
                        className="footercomponent__link">Flat Root</Link> */}
                    <Link 
                        href="/service/siding"
                        className="footercomponent__link">Siding</Link>
                    <Link 
                        href="/service/windows"
                        className="footercomponent__link">Windows</Link>
                    <Link 
                        href="/service/gutters"
                        className="footercomponent__link">Gutters</Link>
                </div>

                <div className="footercomponent__section">
                    <div className="footercomponent__title">Residential Services</div>
                    <Link 
                        href="/service/roofing"
                        className="footercomponent__link">Roofing</Link>
                </div>

                <div className="footercomponent__section">
                    <div className="footercomponent__logo">
                        <Image src="/images/logo.svg" alt="Logo Fox Exterior Solutions" layout="fill" />
                    </div>
                    <div className="footercomponent__paragraph">At Fox Exterior Solutions, we specialize in asphalt shingle roofing. As your trusted contractor, our experienced team is dedicated to delivering high-quality asphalt shingle roofing services backed by years of expertise in the industry.</div>
                </div>

                <div className="footercomponent__socialnetwork">
                    <a href="https://www.facebook.com/MJRofingWYN" target="_blank" className="footercomponent__icon-socialnetwork">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z" 
                                fill="#eeeeee"/>
                            <path d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6781 15.75 31.6594 15.75H34.6875V9.84375C34.6875 9.84375 31.9406 9.375 29.3156 9.375C23.8313 9.375 20.25 12.6984 20.25 18.7125V24H14.1562V30.9375H20.25V47.7094C21.4734 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3422Z" 
                                fill="#333333"/>
                        </svg>   
                    </a>
                    <a href="https://www.instagram.com/foxexteriosolutions/" target="_blank" className="footercomponent__icon-socialnetwork">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5555 15.6166 11.872C14.7747 12.1989 14.0606 12.6363 13.3491 13.348C12.6371 14.0595 12.1997 14.7736 11.8717 15.6152C11.5544 16.4294 11.3384 17.3598 11.2771 18.7219C11.216 20.0873 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9114 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2253 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1283C16.4294 36.4448 17.3598 36.6605 18.7222 36.7229C20.0876 36.7851 20.5236 36.8003 23.9996 36.8003C27.4762 36.8003 27.9111 36.7851 29.2765 36.7229C30.6391 36.6605 31.5703 36.4448 32.3848 36.1283C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2253 36.128 32.3837C36.4427 31.5695 36.6587 30.6391 36.7227 29.277C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0876 36.7227 18.7222C36.6587 17.3595 36.4427 16.4294 36.128 15.6155C35.8 14.7736 35.3626 14.0595 34.6506 13.348C33.9386 12.636 33.2266 12.1987 32.384 11.872C31.5679 11.5555 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012Z" 
                                fill="#eeeeee"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8529 13.5067C23.1937 13.5062 23.574 13.5067 24.0012 13.5067C27.4188 13.5067 27.8239 13.519 29.1735 13.5803C30.4215 13.6374 31.0989 13.8459 31.5501 14.0211C32.1474 14.2531 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4505C34.1541 16.9011 34.3629 17.5785 34.4197 18.8265C34.481 20.1758 34.4944 20.5812 34.4944 23.9972C34.4944 27.4132 34.481 27.8186 34.4197 29.1679C34.3626 30.4159 34.1541 31.0933 33.9789 31.5439C33.7469 32.1413 33.469 32.5666 33.021 33.0144C32.573 33.4624 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4128C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4128C17.5809 34.3552 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.4621 14.98 33.0141C14.532 32.5661 14.2547 32.1405 14.0222 31.5429C13.847 31.0922 13.6382 30.4149 13.5814 29.1669C13.52 27.8175 13.5078 27.4122 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8233C13.6384 17.5753 13.847 16.8979 14.0222 16.4467C14.2542 15.8494 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2494 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5755C20.0097 13.5222 20.4673 13.5062 22.8529 13.5035V13.5067ZM30.8338 15.632C29.9858 15.632 29.2978 16.3193 29.2978 17.1675C29.2978 18.0155 29.9858 18.7035 30.8338 18.7035C31.6818 18.7035 32.3698 18.0155 32.3698 17.1675C32.3698 16.3195 31.6818 15.632 30.8338 15.632ZM24.0012 17.4267C20.371 17.4267 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.37 27.6314 17.4267 24.0012 17.4267Z" 
                                fill="#333333"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6446 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6446 19.7334 24.0012 19.7334Z" 
                                fill="#333333"/>
                        </svg>
                    </a>
                    {/* <a href="#" className="footercomponent__icon-socialnetwork">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                            style={{
                                background: "radial-gradient(circle, #333333 20%, #eeeeee 80%)",
                                borderRadius: "30px",
                            }}
                        >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.123 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.123 36.265 18.0732Z" 
                                fill="#eeeeee"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z" 
                                fill="#eeeeee"/>
                        </svg>
                    </a> */}
                </div>

                <div className="footercomponent__section">
                    <Link href="/contact" className="footercomponent__button">
                        LEAVEA BUFFALO REVIEW <span>&gt;</span>
                    </Link>
                    {/* <Link href="/contact" className="footercomponent__button">
                        LEAVE A ROCHESTER REVIEW <span>&gt;</span>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}