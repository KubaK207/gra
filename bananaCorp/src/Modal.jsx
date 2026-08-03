import { useEffect, useState } from "react";


export function Modal({setActivePanel, game, dispatch, activeTasksList, setActiveTasksList, setDarkMode, darkMode}) {
    const [task] = useState(() => {
        const availableTasks = game.tasks.filter(task => task.minRep <= game.company.reputation);

        return availableTasks[
            Math.floor(Math.random() * availableTasks.length)
        ];
    });
         const styleMode = {
        backgroundColor: darkMode ? "#252a34" : "white",
        color: darkMode ? "#eeeeee" : "black"
    };

        function HandleTaskFunctionAccept(){
            if(game.finance.bananas >= task.investment){

                setActivePanel(null); 
                
                dispatch({type: "REMOVE_BANANAS",payload: task.investment});
                
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
        setActivePanel(null);
        
        dispatch({
            type: "DECLINE_TASK",
            payload: task.reputationToEarn
        })
    }
    
    return(
        <div className="modal" style={styleMode}>
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