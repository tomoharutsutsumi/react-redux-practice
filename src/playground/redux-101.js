import { createStore } from 'redux';

const add = ({a, b}, c) => {
    return a + b + c;
}

const incrementCount = ({ incrementedBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementedBy
});

const decrementCount = ({ decrementedBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementedBy
})

const setCount = ({ count = 101} = {}) => ({
    type: 'SET',
    count
})

const resetCount = ({ count = 0} = {}) => ({
    type: 'RESET',
    count
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementedBy = typeof action.incrementedBy === 'number' ? action.incrementedBy : 1;
                return {
                    count: state.count + incrementedBy
                };
        case 'DECREMENT':
            const decrementedBy = typeof action.decrementedBy === 'number' ? action.decrementedBy : 1;
            return {
                count: state.count - decrementedBy
            };
        case 'RESET':
            return {
                count: action.count
            }
        case 'SET':
            return {
                count: action.count
            }
        default: 
                return state;
    }
}

const store = createStore(countReducer);

store.dispatch(incrementCount({ incrementedBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementedBy: 10 }))

store.dispatch(setCount());

store.dispatch(resetCount());