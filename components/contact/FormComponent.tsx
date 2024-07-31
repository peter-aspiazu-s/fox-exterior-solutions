import { ChangeEvent, FC, FormEvent, useState } from "react";
import Swal from 'sweetalert2';
import validator from 'validator';
import { SpinnerLoading } from "../loading/SpinnerLoading";
import Image from "next/image";


interface FormProps {
    text?:boolean;
}

const servicesForm = [
    {service: "Roofing"},
    {service: "Metal Roofs"},
    {service: "Asphalt Singles"},
    {service: "Solar Shingles"},
    {service: "Flat/Low Slope Roof Styles"},
    {service: "Siding & Windows"},
    {service: "Vinyl Siding"},
    {service: "Metal Siding"},
    {service: "Hardie Board Siding"},
]

export const FormComponent: FC<FormProps> = ({text}) => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email:'',
        phone: '',
        address: '',
        city: '',
        zipcode: '',
        availableappointmenttime: '',
        services: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const {
        firstname,
        lastname, 
        email, 
        phone,
        address,
        city,
        zipcode,
        availableappointmenttime,
        services,
        message
    } = formData;

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (isValid()) {
            try {
                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The form is valid and the email has been sent!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        address: '',
                        city: '',
                        zipcode: '',
                        availableappointmenttime: '',
                        services: '',
                        message: '',
                    });
                } else {
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        phone: '',
                        address: '',
                        city: '',
                        zipcode: '',
                        availableappointmenttime: '',
                        services: '',
                        message: '',
                    });
                    throw new Error('Failed to send email');
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error sending the email',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        const {value, name} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    const isValid = () => {
        if(firstname.trim().length <= 0){

            Swal.fire({
                title: 'Error!',
                text: 'The first name is required',
                icon: 'error',
                confirmButtonText: 'ok'
            });
              
            return false;
        }
        if(lastname.trim().length <= 0){

            Swal.fire({
                title: 'Error!',
                text: 'The last name is required',
                icon: 'error',
                confirmButtonText: 'ok'
            });
              
            return false;
        }
        if(!(validator.isEmail(email))){
            
            Swal.fire({
                title: 'Error!',
                text: 'The email is incorrect',
                icon: 'error',
                confirmButtonText: 'ok'
            });

            return false;
        }
        if(phone.trim().length <= 8){
            
            Swal.fire({
                title: 'Error!',
                text: 'Phone number is required',
                icon: 'error',
                confirmButtonText: 'ok'
            });

            return false;
        }
        
        return true;
    }

    return (
        <div className="formcomponent">
            <div className={`formcomponent__title ${text ? "formcomponent__textclass" : ""}`}>
                Contact Form
                <div className="formcomponent__logo">
                    <Image src="/images/logo2.svg" alt="Logo Fix Exterior Solutions" layout="fill" />
                </div>
            </div>
            <div className={`formcomponent__text ${text ? "formcomponent__textclass" : ""}`}>Send us some basic information about your project needs and an expert from our team will be in touch shortly.</div>
            <form className="formcomponent__form" onSubmit={handleSubmit}>
                {/* <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id='firstname'>FIRST NAME*</label> */}
                <input 
                   className="formcomponent__input" 
                   type="text" 
                   name='firstname'
                   value={firstname} 
                   onChange={handleChange} 
                   placeholder="First Name*"  
                />
                {/* <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id='lastname'>LAST NAME*</label> */}
                <input 
                   className="formcomponent__input" 
                   type="text" 
                   name='lastname'
                   value={lastname} 
                   onChange={handleChange}   
                   placeholder="Last Name*"
                />
                {/* <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="email">EMAIL*</label> */}
                <input 
                    className="formcomponent__input" 
                    type="text" 
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder="Email*"
                />
                {/* <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="phone">PHONE*</label> */}
                <input 
                    className="formcomponent__input" 
                    type="text" 
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    placeholder="Phone*"
                />
                {/* <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="address">ADDRESS</label> */}
                <div className="formcomponent__address-group">
                    <input
                        className="formcomponent__input"
                        type="text"
                        name='address'
                        value={address}
                        onChange={handleChange}
                        placeholder="Address"
                    />
                    <input
                        className="formcomponent__input"
                        type="text"
                        name='city'
                        value={city}
                        onChange={handleChange}
                        placeholder="City"
                    />
                    <input
                        className="formcomponent__input"
                        type="text"
                        name='zipcode'
                        value={zipcode}
                        onChange={handleChange}
                        placeholder="Zip Code"
                    />
                </div>
                <input 
                    className="formcomponent__input" 
                    type="text" 
                    name='availableappointmenttime'
                    value={availableappointmenttime}
                    onChange={handleChange}
                    placeholder="Available Appointment Time"
                />
                <select 
                    className="formcomponent__select" 
                    name='services' 
                    value={services} 
                    onChange={handleChange} 
                >
                    <option value="">Select a service</option>
                    {servicesForm.map((service, index) => (
                        <option key={index + service.service} value={service.service}>{service.service}</option>
                    ))}
                </select>
                {/* <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="message">MESSAGE*</label> */}
                <textarea 
                    className="formcomponent__textarea" 
                    name="message" 
                    value={message}
                    onChange={handleChange}   
                    placeholder="How can we help you?" 
                />
                {
                   loading
                   ? <SpinnerLoading />
                   : <button className="formcomponent__button" type="submit">SUBMIT <span>&gt;</span></button>
                }
            </form>
        </div>
    )
}