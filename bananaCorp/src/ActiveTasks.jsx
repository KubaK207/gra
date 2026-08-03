import { useEffect } from "react";

export function ActiveTasks({ activeTasksList, setActiveTasksList, dispatch }) {
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
                            
                            dispatch({type: "COMPLETE_TASK", payload: {bananas:task.bananasToEarn, reputation: task.reputationToEarn}});
                        }

                        return newTask;
                    })
                    .filter(task => task.timeLeft > 0)
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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