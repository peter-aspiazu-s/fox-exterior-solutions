import Link from "next/link"
import { PaperIcon } from "./PaperIcon"
import { CreditCardIcon } from './CreditCardIcon';
import { CalendarIcon } from './CalendarIcon';
import { CheckIcon } from './CheckIcon';

export const MisionVision = () => {

    return (
        <div className="misionvision">
            <div className="misionvision__container">
                <div className="misionvision__our">
                    <div className="misionvision__title">Our Vision & Mission</div>
                    <div className="misionvision__text">At Fox Exterior Solutions, we specialize in asphalt shingle roofing. As your trusted contractor, our experienced team is dedicated to delivering high-quality asphalt shingle roofing services backed by years of expertise in the industry.</div>
                    <Link href="/" className="bannercomponent__button">
                        GET A QUOTA <span>&gt;</span>
                    </Link>
                </div>
                <div className="misionvision__items">
                    <div className="misionvision__block">
                        <div className="misionvision__icon">
                            <PaperIcon />
                        </div>
                        <div className="misionvision__block-title">Free Consultation</div>
                        <div className="misionvision__block-text">It&apos;s important to understand your specific needs so we can guide you to the best materials for an efficient and cost-effective project.</div>
                    </div>
                    <div className="misionvision__block">
                        <div className="misionvision__icon">
                            <CreditCardIcon />
                        </div>
                        <div className="misionvision__block-title">No Deposit Required</div>
                        <div className="misionvision__block-text">We won&apos;t get paid until your job is done, so you can trust us to do it well. That philosophy has worked for over 65 years.</div>
                    </div>
                    <div className="misionvision__block">
                        <div className="misionvision__icon">
                            <CalendarIcon />
                        </div>
                        <div className="misionvision__block-title">4 Season of Service</div>
                        <div className="misionvision__block-text">We have crews out all 4 seasons. If you need a new roof, siding, windows, gutters or trim, there&apos;s no better time to call us whether you have an installation or repair need.</div>
                    </div>
                    <div className="misionvision__block">
                        <div className="misionvision__icon">
                            <CheckIcon />
                        </div>
                        <div className="misionvision__block-title">Satisfaction Gaurantee</div>
                        <div className="misionvision__block-text">Your project&apos;s success is our priority. We strive for a clean job site, precise installation, and post-installation adjustments or repairs to get thigns right.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}