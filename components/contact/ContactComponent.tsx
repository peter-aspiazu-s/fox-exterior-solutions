import { FC } from "react";
import { FormComponent } from "./FormComponent";
import { MapComponent } from "./MapComponent";

export const ContactComponent: FC = () => {
    return (
        <div className="contactcomponent">
            <div className="contactcomponent__container">
                <div className="contactcomponent__text">Our team at Besroi Roofing & Siding works all year round to installing roofs, siding, decks, gutters, windows, and doors for our customers in Western NY. We don’t go south when the weather does. We are certified installers for major roof manufacturers including, GAF, CertainTeed, and Owens Corning. Add value and decrease your energy costs today with products installed by our experienced and knowledgeable team.</div>
                <div className="contactcomponent__formmap">
                    <FormComponent />
                    <MapComponent />
                </div>
            </div>
        </div>
    )
}