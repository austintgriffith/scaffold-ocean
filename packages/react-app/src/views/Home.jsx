import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts, currentCount }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  //const purpose = useContractReader(readContracts, "YourContract", "purpose");

  const currentTime = useContractReader(readContracts, "Ocean", "currentTime");

  const [ actors, setActors ] = useState();

  useEffect(()=>{
    const getActors = async ()=>{
      console.log("UPDATE!",currentCount)
      let allActors = []
      for(let id=0;id<currentCount;id++){
        let actor = await readContracts.Ocean.actors(id)
        if(actor){
            let currentLocation = await readContracts.Ocean.currentLocation(id)
            allActors.push({...actor,currentLocation})
        }
      }


      setActors(allActors)
    }
    getActors()
  },[ currentCount ])

  const [ render, setRender ] = useState();
  const [ selected, setSelected ] = useState();

  useEffect(()=>{
    if(actors&&actors.length){
      console.log("RENDER LOOP!")
      let newRender = []
      for(let id=0;id<actors.length;id++){
        console.log("RENDERING",id)

        const actor = actors[id]

        //const timePassed = currentTime.sub(actor.timestamp)

        //const currentX = actor.x + timePassed.mul(actor.dx).toNumber()

        //console.log("timePassed",timePassed.toNumber())

        //console.log("actor",actor)

        //console.log("currentX",currentX)

        let extraStuff = ""
        if(selected==id){
          extraStuff=" ("+actor.currentLocation[0]+","+actor.currentLocation[1]+") ";
        }

        newRender.push(
          <div onClick={(event)=>{setSelected(id);event.stopPropagation();}} style={{position:"absolute",left:actor.currentLocation[0],top:actor.currentLocation[1]}}>
            ⛵️{id}{extraStuff}
          </div>
        )
      }
      setRender(newRender)
    }
  },[ actors, currentTime, selected ])


  return (
    <div>
      <div>Current Time: {currentTime && currentTime.toNumber()}</div>
      <div>Current Count: {currentCount && currentCount.toNumber()}</div>
      <div>ACTORS: { actors && actors.length }</div>

      <div onClick={()=>{setSelected()}} style={{position:"relative",width:65536,height:65536,border:"2px solid blue",backgroundColor:"#85a7FD"}}>
        { render }
      </div>


    </div>
  );
}

export default Home;
