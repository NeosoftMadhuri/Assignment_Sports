import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
export default function PlayerCard({ playerData }) {
    const navigate=useNavigate();

    const handleData =(data)=>{
         navigate('/playerDetails', {state:data})
    }

    return (
        <>


            {playerData?.map((data) => (
                <Col sx={3} md={3} lg={3}>
                    <Card style={{ width: '16rem' ,marginBottom:"30px", border:"1px solid ", boxShadow:"5px 5px black"}} onClick={()=>handleData(data)}>
                        <Card.Img variant="top" src={`images/${data.Id}.jpg`} height={200} />
                        <Card.Body style={{backgroundColor:"lightgray"}}>
                            <Card.Title>{data.PFName}</Card.Title>
                            <Card.Text>
                           <h6>Skill History:{data.SkillDesc}</h6>
                           <h6>   Value : $ {data.Value}</h6>
                            </Card.Text>
                            <hr/>
                            <Card.Text >
                               <h6> Upcoming Matches</h6>
                               <div style={{textAlign:"center"}}>
                               {data.UpComingMatchesList.map((match) => (
                                    <p key={match.VsCCode} style={{color:"black",fontSize:"15px"}}>
                                       {match.VsCCode.length>0 ?
                                       <>
                                        {match.CCode} vs {match.VsCCode} <br />
                                        {match.MDate}
                                       </>
                                       :
                                       <div style={{height:"46px"}}>
                                              <p> Not any matches scheduled</p>
                                       </div>
                                      
                                       }
                                       
                                    </p>
                                ))
}
                               </div>
                                
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            ))}



        </>
    )
}
