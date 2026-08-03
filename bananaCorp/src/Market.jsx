export function Market({setActivePanel}) {

    function closeMarket() {
        setActivePanel(null);
    }
    return (
        <div className="marketClass">
            <div className="marketColumn1">jeden</div>
            <div className="marketColumn2">2</div>
            <div className="marketColumn3">3</div>
            <button className="exitButton" onClick={() => closeMarket()}>X</button>
        </div>
    )
}