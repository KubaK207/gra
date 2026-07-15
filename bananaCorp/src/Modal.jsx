export function Modal({setOpen, game, setGame}) {
    let rand = Math.floor(Math.random() * game.tasks.length);
    return(
        <div className="modal">
            <button onClick={() => {setOpen(false); setGame({...game, bananas: game.bananas + game.tasks[rand]?.bananasToEarn, reputation: game.reputation + game.tasks[rand]?.reputationToEarn })}}>Przyjmij</button>
            <button onClick={() => {setOpen(false); setGame({...game, reputation: game.reputation - game.tasks[rand]?.reputationToEarn})}}>Odrzuć</button>
            <p>{game.tasks[rand]?.name}</p>
            <p>Banany: {game.tasks[rand]?.bananasToEarn}</p>
            <p>Reputacja: {game.tasks[rand]?.reputationToEarn}</p>
        </div>
    );
}