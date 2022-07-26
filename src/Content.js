import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import QandAList from "./QandAList"
// import questionsData from "./data"
import { ToastContainer, toast } from 'react-toastify';

let questionsData;
if(localStorage.getItem("questionsItems") !==null){
    questionsData=JSON.parse(localStorage.getItem("questionsItems"))
}else{
    questionsData=[]
}

const Content2 = () => {
    const [data, setData] = useState(questionsData);
    const [enteredQuestion, setEnteredQuestion] = useState("");
    const [enteredAnswer, setEnteredAnswer] = useState("");
    const [deletedElement, setDeletedElement] = useState("");

    const notify = (message, type) => {
        if (type === 'success') {
            toast.success(message)
        } else {
            toast.error(message)
        }

    };
    const additem = () => {
        if (enteredQuestion === "" || enteredAnswer === "") {
            notify("wrong input", "error")
        } else {
            questionsData.push({ id: Math.random(), q: enteredQuestion, a: enteredAnswer })
            setEnteredQuestion("")
            setEnteredAnswer("")
            notify("question added successfully", "success")
            setData([...questionsData])
        }

    }
    const deleteFunction = (id) => {
        let element = questionsData.find(item => (item.id === id))
        let indexElement = questionsData.indexOf(element)
        questionsData.splice(indexElement, 1)
        notify("question deleted successfully", "success")
        setData([...questionsData])
    }
    const deleteAll = () => {
        questionsData.splice(0, questionsData.length)
        console.log(questionsData)
        setData([])
    }




    useEffect(() => {
        setData(questionsData)
        localStorage.setItem("questionsItems", JSON.stringify(data))


    }, [data])
    return (
        <Container className='p-5'>
            <Row className="justify-content-center">
                <Col sm="4">
                    <div className="fs-3 text-center py-2">Q and A</div>
                </Col>
                <Col sm="8">
                    <Row className="my-3">
                        <Col sm="5">
                            <Form.Control value={enteredQuestion} onChange={(e) => { setEnteredQuestion(e.target.value) }} type="text" placeholder="Enter a Question" />
                        </Col>
                        <Col sm="5">
                            <Form.Control value={enteredAnswer} onChange={(e) => { setEnteredAnswer(e.target.value) }} type="text" placeholder="enter a Answer" />
                        </Col>
                        <Col sm="2">
                            <button onClick={additem} variant="primary" type="submit" className='btn_color '> Submit </button>
                        </Col>
                    </Row>
                    <QandAList deleteFunction={deleteFunction} data={data} setDeletedElement={setDeletedElement} />
                    {data.length > 0 && <button onClick={deleteAll} className="btn_color my-3 w-100">Delete All</button>}
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}

export default Content2
