import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LogInForm from '../../components/LogInForm/LogInForm'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [form, setForm] = useState('sign up')
    const [formButton, setFormButton] = useState('login')

    function handleForm() {
        let formHolder = form
        let buttonHolder = formButton
        setForm(buttonHolder)
        setFormButton(formHolder)
    }
    return(
        <>
        <button value={form} onClick={handleForm}>{formButton}</button>
        <h1>AuthPage</h1>
        {   form === 'sign up' ?
            <SignUpForm setUser={setUser} />
            :
            <LogInForm setUser={setUser} />

        }

        </>
    )

}