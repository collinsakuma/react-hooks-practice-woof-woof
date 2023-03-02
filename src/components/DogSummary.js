function DogSummary({ selectedDog, updateGoodDog }) {
    
    return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={selectedDog.image} alt={selectedDog.name}/>
            <h2>{selectedDog.name}</h2>
            <button  onClick={() => updateGoodDog(selectedDog.id, !selectedDog.isGoodDog)} className={selectedDog ? "" : "hidden"}>{selectedDog.isGoodDog ? "Good" : "Bad"} Dog!</button>
        </div>
    </div>
    )
}
export default DogSummary