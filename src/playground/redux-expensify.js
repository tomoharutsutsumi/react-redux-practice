import { createStore, combineReducers } from 'redux';



store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(VisibleExpenses);
});

store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: 'dsdssdsds',
        description: 'jajaj dsdssd',
        note: 'this is final',
        amount: 433334,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'jen',
    age: 24
};