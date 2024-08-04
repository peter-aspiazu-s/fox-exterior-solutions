import { FC } from "react";
import Image from "next/image";


export const WhatsAppButton: FC = () => {
    return (
        <a href="https://wa.link/da3iiu" target="_blank" className="whatsappbutton">
            <img src="/images/ws-ico.png" alt="WhatsApp Button" width="100%" height="100%" loading="lazy" />
        </a>
    )
}