import { FC } from "react";
import Image from "next/image";


export const WhatsAppButton: FC = () => {
    return (
        <a href="https://wa.link/da3iiu" target="_blank" className="whatsappbutton">
            <Image src="/images/ws-ico.png" alt="WhatsApp Button" layout="fill" />
        </a>
    )
}