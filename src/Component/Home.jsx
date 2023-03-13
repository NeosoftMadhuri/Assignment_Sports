import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import PlayerCard from '../Container/PlayerCard'
import { Row } from 'react-bootstrap';
import HeaderPage from '../Container/HeaderPage'

export default function Home() {

    const [playerData,setPlayerData]=useState([]);

    useEffect(() => {
        axios.get('https://api.npoint.io/20c1afef1661881ddc9c')
        .then(res=>{
            const player= res.data.playerList.sort(function (a, b) {
                if (a.PFName < b.PFName) {
                  return -1;
                }
                if (a.PFName > b.PFName) {
                  return 1;
                }
                return 0;
              });
              setPlayerData(player)
        }
           
            
    )}, []);

      const handleSearch =(e)=>{
        const item = e.target.value;
console.log(playerData)
        const search_res =playerData && playerData.filter((itm) => {
          return (
            itm.PFName?.toLowerCase().includes(item.toLowerCase()) ||
            itm.TName?.toLowerCase().includes(item.toLowerCase())
          );
        });
        console.log(search_res)
        setPlayerData(search_res);
      }
console.log(playerData)
  return (
    <>
     <HeaderPage/>
    <div style={{marginLeft:"500px"}}>
        <input
          type="text"
          placeholder="Search by First or last name of player"
         style={{width:"300px",marginTop:"20px",border:"1px solid gray",borderRadius:"10px",padding:"10px"}}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div  >
          <Row style={{margin:"15px"}}>
          <PlayerCard playerData={playerData} />
          </Row>
      
      </div>
   
  

    </>
  )
}
