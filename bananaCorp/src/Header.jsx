export function Header({game, setGame}) {
    return(
        <>
        <header>

            <h4>Bananas {game.bananas}</h4>
            <h4>Reputation {game.reputation}</h4>
            
        </header>
        </>
    );
}