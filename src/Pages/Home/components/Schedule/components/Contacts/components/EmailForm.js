import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { StyledForm, StyledInput, StyledLabel, StyledTextArea } from "../styledComponents/styledContacts"
import LoadingIcon from './LoadingIcon';


function EmailForm() {
    const form = useRef();
    const [user_name, setUser_Name] = useState('')
    const [user_email, setUser_Email] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            user_name !== "" &&
            user_email !== "" &&
            message !== "" 
        ) {
            setLoading(true)
            emailjs
                .sendForm(
                    'service_fwt8d3s',
                    'template_4sm43vc',
                    form.current,
                    'gHNykkIMbDhLzzPpP'
                )
                .then(
                    (result) => {
                        console.log(result.text)
                        setLoading(false)  
                        alert("messaggio inviato con successo")                                              
                    },
                    (error) => {
                        console.log(error.text);
                        setLoading(false)
                        alert("al momento non siamo riusciti a raggiungere il server, si prega di riprovare a contattarci nei prossimi giorni");
                    }
                );

            setUser_Name('')
            setUser_Email('')
            setMessage('')
        } else if (
            user_name === "" ||
            user_email === "" ||
            message === "" 
        ) {
            alert("Ricorda di compilare tutti i campi")
        } else {

        }
        
    };

    return (
        <StyledForm ref={form} onSubmit={sendEmail}>
            {loading && <LoadingIcon />}
            <StyledLabel>Nome</StyledLabel>
            <StyledInput
                type="text"
                name="user_name"
                value={user_name}
                onChange={(event) => {setUser_Name(event.target.value)}}
            />
            <StyledLabel>Email</StyledLabel>
            <StyledInput
                type="email"
                name="user_email"
                value={user_email}
                onChange={(event) => {setUser_Email(event.target.value)}}
            />
            <StyledLabel>Messaggio</StyledLabel>
            <StyledTextArea
                name="message"
                value={message}
                onChange={(event) => {setMessage(event.target.value)}}
            />
            <StyledInput type="submit" value="INVIA" />
        </StyledForm>
    )
}

export default EmailForm