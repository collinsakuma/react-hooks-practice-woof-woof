import DogCard from "./DogCard"

function DogBar({ dogData, handleDogSelect }) {
    const renderDogs = dogData.map(dog => (
        <DogCard 
            key={dog.id} 
            dog={dog}
            handleDogSelect={handleDogSelect}
        />
    ))
    return (
        <div id="dog-bar">
            {renderDogs}
        </div>
    )
}
export default DogBar