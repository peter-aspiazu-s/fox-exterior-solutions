import { ChangeEvent, FC, FormEvent, useState } from "react";
import Swal from 'sweetalert2';
import validator from 'validator';
import { SpinnerLoading } from "../loading/SpinnerLoading";


interface FormProps {
    text?:boolean;
}

export const FormComponent: FC<FormProps> = ({text}) => {

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const {
        name, 
        email, 
        phone,
        message
    } = formData;

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (isValid()) {
            try {
                const response = await fetch('/api/sendEmails', {
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
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    });
                } else {
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

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {value, name} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    const isValid = () => {
        if(name.trim().length <= 0){

            Swal.fire({
                title: 'Error!',
                text: 'The name is required',
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
            <div className={`formcomponent__title ${text ? "formcomponent__textclass" : ""}`}>Quote Form</div>
            <div className={`formcomponent__text ${text ? "formcomponent__textclass" : ""}`}>Send us some basic information about your project needs and an expert from our team will be in touch shortly.</div>
            <form className="formcomponent__form" onSubmit={handleSubmit}>
                <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id='name'>NAME*</label>
                <input 
                   className="formcomponent__input" 
                   type="text" 
                   name='name'
                   value={name} 
                   onChange={handleChange}   
                />
                <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="email">EMAIL*</label>
                <input 
                    className="formcomponent__input" 
                    type="text" 
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="phone">PHONE*</label>
                <input 
                    className="formcomponent__input" 
                    type="text" 
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                />
                <label className={`formcomponent__label ${text ? "formcomponent__textclass" : ""}`} id="message">MESSAGE*</label>
                <textarea 
                    className="formcomponent__textarea" 
                    name="comment" 
                    value={message}
                    onChange={handleChange}    
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