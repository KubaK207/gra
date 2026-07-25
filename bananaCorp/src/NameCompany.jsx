export function NameCompany({ game, setGame}) {
    
    function handleChange(e) {
        setGame({ ...game, game: { ...game.game, name: e.target.value } });
    }
    return (
        <div className="nameCompany" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <input type="text" value={game.nameCompany} onChange={handleChange} />
            <button onClick={() => setGame({ ...game, game: { ...game.game, name: game.nameCompany } })}>Name</button>
        </div>
    )
}   