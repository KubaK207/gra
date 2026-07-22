import { useEffect } from "react";

export function ActiveTasks({ activeTasksList, setActiveTasksList, setGame }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTasksList(prev =>
                prev
                    .map(task => {
                        const newTask = {
                            ...task,
                            timeLeft: task.timeLeft - 1,
                        };

                        if (newTask.timeLeft <= 0) {
                            setGame(prevGame => ({
                                ...prevGame,
                                finance: {...prevGame.finance, bananas: prevGame.finance.bananas + (task.bananasToEarn / 2)},
                                company: { ...prevGame.company, reputation: prevGame.company.reputation + (task.reputationToEarn / 2)},
                            }));
                        }

                        return newTask;
                    })
                    .filter(task => task.timeLeft > 0)
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [setActiveTasksList, setGame]);

    return (
        <div>
            {activeTasksList.map(task => (
                <div className="activeTasks" key={task.id}>
                    <p>
                        {task.client}<br></br>
                        {task.name}<br></br>
                        {task.timeLeft}<br></br>
                    </p>
                </div>
            ))}
        </div>
    );
}