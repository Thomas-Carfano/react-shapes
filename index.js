const container = document.querySelector('#circleContainer');
const root = ReactDOM.createRoot(container);

const container2 = document.querySelector('#squareContainer');
const root2 = ReactDOM.createRoot(container2);

const App = () => {
    return (<Circles />, <Squares />)
}
const Circles = () => {
    return(
        <>
        <h1>Circles</h1>
        <div className="circle" id="1" style={{backgroundColor:setColor()}}></div>
        <div className="circle" id="2"></div>
        <div className="circle" id="3"></div>
        </>
    )
};

const Squares = () => {
    return(
        <>
         <h1>Squares</h1>
        <div className="square" id="4"></div>
        <div className="square" id="5"></div>
        <div className="square" id="6"></div>
        </>
    )

};

root.render(<App />)