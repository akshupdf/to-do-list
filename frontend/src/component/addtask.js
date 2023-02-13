import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';



function Addtask() {
    const [que, setQue] = useState([]);


    const navigate = useNavigate();

    const faq = () => {
        Axios.post("http://localhost:3000/faq", { que: que })
        navigate('/faq')

    }

    return (
        <div className="m-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task</Form.Label>
                <Form.Control className="rounded-0" type="text"
                    onChange={(e) => {
                        setQue(e.target.value)
                    }} />
            </Form.Group>

            <div align="center">
                <Button className="rounded-0 r-2" variant="dark" type="submit" size="lg" onClick={faq}>
                    Add Task
                </Button>{' '}

            </div>
        </div>
    )
}

export default Addtask;