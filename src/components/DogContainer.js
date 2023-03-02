import { useEffect, useState } from "react"
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";

function DogContainer() {
    const [dogData, setDogData] = useState([]);
    const [selectedDog, setSelectedDog] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/pups")
            .then(res => res.json())
            .then(data => setDogData(data)) 
    },[])

    const updateGoodDog = (id, isGoodDog) => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: isGoodDog})
        })
        .then(res => res.json())
        .then(data => setSelectedDog(data))
    }   

    const handleDogSelect = (dog) => {
        setSelectedDog(dog)
    }

    return (
        <>
            <div id="filter-div">
                <button id="good-dog-filter">Filter good dogs: OFF</button>
            </div>
            <DogBar dogData={dogData} handleDogSelect={handleDogSelect}/>
            <DogSummary selectedDog={selectedDog} updateGoodDog={updateGoodDog}/>
        </>
    )
}
export default DogContainer