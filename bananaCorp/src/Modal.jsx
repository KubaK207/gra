export function Modal({setOpen, game, setGame}) {
    let rand = Math.floor(Math.random() * game.tasks.length);

    function TaskFunctionAccept(){
        setOpen(false); setGame({...game, bananas: game.bananas + game.tasks[rand]?.bananasToEarn, reputation: game.reputation + game.tasks[rand]?.reputationToEarn })
    }
    function TaskFunctionDecline(){
        setOpen(false); setGame({...game, reputation: game.reputation - game.tasks[rand]?.reputationToEarn})
    }
    return(
        <div className="modal">
            <button onClick={() => TaskFunctionAccept()}>Przyjmij</button>
            <button onClick={() => TaskFunctionDecline()}>Odrzuć</button>
            <p>{game.tasks[rand]?.name}</p>
            <p>Banany: {game.tasks[rand]?.bananasToEarn}</p>
            <p>Reputacja: {game.tasks[rand]?.reputationToEarn}</p>
        </div>
    );
}