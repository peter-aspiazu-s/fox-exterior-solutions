import { FC } from "react";

export const MapComponent: FC = () => {
    return (
        <div className="mapcomponent">
            <div className="mapcomponent__map">
                <div className="mapcomponent__title">Buffalo Location</div>
                <a href="https://maps.app.goo.gl/8FKfPgahiwQucrEm9" target="_blank" className="mapcomponent__link">31 Stillwell Ave Kenmore, NY 14217</a>
                <a href="tel:+7168286889" className="mapcomponent__link">(716) 828-6889</a>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.4971046620944!2d-78.86912762403573!3d42.96780107114286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d36d12275b03e3%3A0x5a43f297eac85708!2s31%20Stillwell%20Ave%2C%20Kenmore%2C%20NY%2014217%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1720483489171!5m2!1ses-419!2sec" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <div className="mapcomponent__map">
                <div className="mapcomponent__title">Rochester Location</div>
                <a href="#" className="mapcomponent__link">711 Emerson St.
                    Rochester, NY 14613</a>
                <a href="#" className="mapcomponent__link">(585) 252-5122</a>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2909.7172252021783!2d-77.6505122!3d43.1734595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b47698925d67%3A0x949393608d5e48e3!2s711%20Emerson%20St%2C%20Rochester%2C%20NY%2014613%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1720479815932!5m2!1ses-419!2sec" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </div>
    )
}