import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


function FAQ_TABLE() {

    const navigate = useNavigate();
    const [data, setQue] = useState([])
    const [que, setQ] = useState([]);
    const [id, setId] = useState([]);


    useEffect(() => {
        const queans = async () => {
            try {
                const faq = await axios.get("http://localhost:3000/test")
                setQue(faq.data)
            } catch (err) {
                console.log(err);
            }
        }; queans();
    }, []);

    const rem = (id) => {
        axios.delete("http://localhost:3000/delete/", { id: id })
        alert("Task removed")
        navigate('/faq')
    }

    const edit = (id) => {
        axios.put("http://localhost:3000/update", { id: id })
    }





    return (
        <div>
            <div className='faq-section'>
                <div className='container mt-4'>
                    <h1 className='mb-4'>To-Do-List</h1>
                    <Button variant="primary" size="sm" style={{ color: "#0000", backgroundColor: "#000000" }}><Link to='/addtask'>Add Task</Link></Button>{' '}



                    <div className="border border-black rounded-3">
                        <div className="m-4 flex">

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>To-Do-List</th>
                                    </tr>
                                </thead>

                                {data.map(task => (

                                    <tbody key={task.id}>
                                        <tr>
                                            <td>{task.id}</td>
                                            <td> {task.que}</td>
                                            <td><Button variant="danger" size="sm" onClick={() => rem(task.id)}>Delete</Button></td>
                                            <td> <Button variant="" size="sm" style={{ backgroundColor: "#70FF79" }} ><Link to='/edittask' onClick={() => edit(task.id)}>Edit Task</Link></Button></td>
                                        </tr>

                                    </tbody>

                                ))}
                            </Table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}



export default FAQ_TABLE;