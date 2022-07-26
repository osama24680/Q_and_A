import React from 'react'
import { Accordion, Row } from 'react-bootstrap';

const QandAList = ({ data,deleteFunction }) => {

   
    return (
        <Row>
            <Accordion defaultActiveKey="0">
                {data.length >0 ? (data.map((item, index) => (
                    <Accordion.Item eventKey={item.id} key={index}>
                        <Accordion.Header>{item.q} </Accordion.Header>
                        <Accordion.Body>
                            <p> {item.a}</p>
                            <div><button onClick={() =>deleteFunction(item.id)} className="btn_color">Delete</button></div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))) : <h3 className="text-center mt-3">There are no questions</h3>}


            </Accordion>
        </Row>
    )
}

export default QandAList