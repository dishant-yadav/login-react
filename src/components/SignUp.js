import React, { useState } from 'react';

const SignUp = () => {

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    })

    // console.log(input);

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
        setInput(() => {
            return {
                username: "",
                email: "",
                password: "",
            }
        });
        const inputFields = document.getElementsByTagName("input");
        for (const inputField of inputFields) {
            inputField.value = "";
        }
    }

    const addData = (e) => {
        e.preventDefault();
        const { username, email, password } = input;
        if (username.trim() === "") {
            window.alert("Name can't be empty");
        }
        else if (email.trim() === "") {
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
            console.log("Data Added");
            localStorage.setItem(input.email, JSON.stringify(input));
            // clear();
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
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputUsername" name="username" onChange={getData} />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" name="email" onChange={getData} />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name="password" onChange={getData} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg col-12" onClick={addData}>Sign in</button>
            </form>
        </div>
    )
}

export default SignUp;