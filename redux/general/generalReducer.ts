import { GeneralData } from '../../types';

const initialState = {
    isLoading: true,
    alerts: [],
};

const generalReducer = (state: GeneralData = initialState, action: any) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case 'ADD_ALERT':
            if (!state.alerts.find((x) => x.key === action.payload.newAlert.key)) {
                const addingAlertsCopy = [...state.alerts];

                addingAlertsCopy.push(action.payload.newAlert);

                if (addingAlertsCopy.length > 5) {
                    addingAlertsCopy.shift();
                }

                return {
                    ...state,
                    alerts: addingAlertsCopy,
                };
            }

            return {
                ...state,
            };
        case 'REMOVE_ALERT':
            const removeAlertsCopy = [...state.alerts];

            const updatedRemoveAlerts = removeAlertsCopy.filter((item) => item.key !== action.payload.key);

            return {
                ...state,
                alerts: updatedRemoveAlerts,
            };
        default:
            return state;
    }
};

export default generalReducer;
