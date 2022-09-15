import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const getData = (e) => {
        const { value, name } = e.target;
        setInput(() => {
            return {
                ...input,
                [name]: value,
            }
        })

    }

    const clear = () => {
        const inputFields = document.getElementsByTagName("input");
        for (const inputField of inputFields) {
            inputField.value = "";
        }
    }

    const addData = (e) => {
        e.preventDefault();
        const { email, password } = input;

        if (email.trim() === "") {
            window.alert("Email can't be empty");
        }
        else if (password.trim() === "") {
            window.alert("Password can't be empty");
        }
        else if (password.length < 6) {
            window.alert("Password can't be less than 7 characters");
        }
        else if (!email.includes('@')) {
            window.alert("Email must have @");
        }
        else if (!email.includes('.com')) {
            window.alert("Email must have .com");
        }
        else {
            console.log("Data Retrived");
            const data = JSON.parse(localStorage.getItem(input.email));
            if (data) {

                if (data.password === input.password) {
                    console.log("Success");
                    history("/success");
                }
                else {
                    history("/error")
                    console.log("NOT");
                }
                clear();
            }
        }

    }

    return (
        <div className='container-fluid'>
            <br />
            <br />
            <br />
            <br />
            <form className="row g-3 mt-4" style={{
                maxWidth: "500px",
                margin: "0 auto",
                border: "2.5px solid black",
                borderRadius: "10px",
                padding: "20px",
            }}>
                <div className="col-12 mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" name="email" onChange={getData} />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name="password" onChange={getData} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg col-12" onClick={addData}>Log in</button>
            </form>
        </div>
    )
}

export default Login;