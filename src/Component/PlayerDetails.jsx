import React from 'react'
import HeaderPage from '../Container/HeaderPage'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
export default function PlayerDetails() {
    const data = useLocation();
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <>
            <HeaderPage />
            <div style={{ marginLeft: "400px", marginTop: "50px" }}>
                <Card style={{ width: '25rem' }} >
                    <Card.Img variant="top" src={`images/${data.state.Id}.jpg`} height={200} />
                    <Card.Body style={{ backgroundColor: "lightgray" }}>
                        <Card.Title>{data.state.PFName}</Card.Title>
                        <Card.Text>
                            <h6>Skill History:{data.state.SkillDesc}</h6>
                            <h6>   Value : $ {data.state.Value}</h6>
                        </Card.Text>
                        <hr />
                        <Card.Text >
                            <h6> Upcoming Matches</h6>
                            <div style={{ textAlign: "center" }}>
                                {data.state.UpComingMatchesList.map((match) => (
                                    <p key={match.VsCCode} style={{ color: "black", fontSize: "15px" }}>
                                        {match.CCode} vs {match.VsCCode} <br />
                                        {match.MDate}
                                    </p>
                                ))}
                            </div>

                        </Card.Text>
                        <Button variant="warning" onClick={() => handleNavigate()} style={{ marginLeft: "120px" }}>Back To Home</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}
