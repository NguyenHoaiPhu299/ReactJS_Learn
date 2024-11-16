function CarCIC() {
    return <h2>I am a Car !</h2>;
}

function GarageCIC() {
    return(
        <>
            <h1>Who lives in my Garage ?</h1>
            <CarCIC />
        </>
    )
}

export default GarageCIC;