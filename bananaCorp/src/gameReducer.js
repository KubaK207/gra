export function gameReducer(state, action){
switch(action.type) {

        case "ADD_BANANAS":
            return {
                ...state,
                finance: {
                    ...state.finance,
                    bananas: state.finance.bananas + action.payload
                }
            };


        case "REMOVE_BANANAS":
            return {
                ...state,
                finance: {
                    ...state.finance,
                    bananas: state.finance.bananas - action.payload
                }
            };


        case "ADD_REPUTATION":
            return {
                ...state,
                company: {
                    ...state.company,
                    reputation: state.company.reputation + action.payload
                }
            };


        case "REMOVE_REPUTATION":
            return {
                ...state,
                company: {
                    ...state.company,
                    reputation: Math.max(
                        0,
                        state.company.reputation - action.payload
                    )
                }
            };


        case "COMPLETE_TASK":
            return {
                ...state,
                finance: {
                    ...state.finance,
                    bananas:
                        state.finance.bananas + action.payload.bananas
                },
                company: {
                    ...state.company,
                    reputation:
                        state.company.reputation + action.payload.reputation
                }
            };

case "DECLINE_TASK":
    return {
        ...state,
        firstTask: false,
        company: {
            ...state.company,
            reputation: Math.max(
                0,
                state.company.reputation - action.payload
            )
        }
    };
        default:
            return state;
    }
}