import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';



function USER_REG() {

    const navigate = useNavigate();
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);

    const register = () => {
        Axios.post("http://localhost:3000/viewer", { name: name, password: password })
        alert("Thank you , Please Login now")
        navigate('/login')

    }


    return (
        <div>
            <div className='faq-section'>
                <div className='container mt-4'>
                    <h1 className='mb-4 mt-5' align="center">User Registration</h1>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="border border-black border-3 rounded-0">
                                <div className="m-4">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control className="rounded-0" type="text" placeholder="Enter email"
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className="rounded-0" type="password" placeholder="Password"
                                            onChange={(e) => { setPassword(e.target.value) }} />
                                    </Form.Group>
                                    <div align="center">
                                        <Button className="rounded-0 r-2" variant="dark" type="submit" size="lg" onClick={register}>
                                            Register New User
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default USER_REG;