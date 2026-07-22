import { useEffect, useState } from "react";


export function Modal({setOpen, game, setGame, activeTasksList, setActiveTasksList}) {
    const [task] = useState(() => {
        const availableTasks = game.tasks.filter(task => task.minRep <= game.company.reputation);

        return availableTasks[
            Math.floor(Math.random() * availableTasks.length)
        ];
    });
        

        function HandleTaskFunctionAccept(){
            if(game.finance.bananas >= task.investment){

                setOpen(false); 
                
                setGame(prev => ({...prev, firstTask: false, finance: {...prev.finance, bananas: prev.finance.bananas - task.investment}}));
                
                setActiveTasksList(prev => [
                ...prev,
                {
                    ...task,
                    timeLeft: task.duration,
                    startDate: Date.now()
                }
            ]);
        }else{
            alert("Masz zbyt mało bananów");
        }
    }
    function HandleTaskFunctionDecline(){
        setOpen(false); 
        
        setGame(prev => ({...prev, firstTask: false, company: {...prev.company, reputation: prev.company.reputation - task.reputationToEarn}}));
    }
    
    return(
        <div className="modal">
            <div className="modalOffer">
                📄Oferta kontraktu
            </div>
            <div className="modalContract">
                <p>👤Klient: {task.client}</p>
                <p>🏢Firma: {task.company}</p>
                <p>🍌Nagroda: {task.bananasToEarn}</p>
                <p>⭐Reputacja: {task.reputationToEarn}</p>
                <p>💰Inwestycja: {task.investment}</p>
            </div>
            <button onClick={() => HandleTaskFunctionAccept()}>Podpisz</button>
            <button onClick={() => HandleTaskFunctionDecline()}>Nie podpisuj</button>
        </div>
    );
}