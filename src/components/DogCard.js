function DogCard({ dog, handleDogSelect }) {
    return (
        <span onClick={() => handleDogSelect(dog)}>{dog.name}</span>
    )
}
export default DogCard