import filterReducer from '../reducers/filterReducer';
import {
    SET_FUEL_FILTER,
    SET_BUDGET_FILTER,
    SET_PRICE_SORT,
    SET_LOADER,
    CLEAR_ALL
} from '../utils/types';

describe('Reducer Tests', () => {
    const initialState = {
        filters: {
            fuel: [],
            budget: { min: 0, max: Infinity }
        },
        sortDirection: "asc",
        products: [],
        loading: false
    };


    it('it should handle set filter', () => {
        const action = {
            type: SET_FUEL_FILTER,
            payload: [1, 3]
        };

        const temp = {
            ...initialState,
            filters: {
                ...initialState.filters,
                fuel: [1 , 3]
            }
        };

        const res = filterReducer(initialState, action);
        expect(res
        ).toEqual(temp);
    });

    it('should handle set budget', () => {
        const action = {
            type: SET_BUDGET_FILTER,
            payload: { min: 5, max: 10 }
        };

        const temp = {
            ...initialState,
            filters: {
                ...initialState.filters,
                budget: { min: 5, max: 10}
            }
        };

        const res = filterReducer(initialState, action);
        expect(res).toEqual(temp);
    });

    it('it should handle set sort', () => {
        const action = {
            type: SET_PRICE_SORT,
            payload: 'desc'
        };

        const temp = {
            ...initialState,
            sortDirection: 'desc'
        };

        const res = filterReducer(initialState, action);
        expect(res).toEqual(temp);
    });

    it('should handle set loader', () => {
        const action = {
            type: SET_LOADER,
            payload: true
        };

        const temp = {
            ...initialState,
            loading: true
        };

        const res = filterReducer(initialState, action);
        expect(res).toEqual(temp);
    });

    it('should handle set clear all', () => {
        const currentState = {
            filters: {
                fuel: ['1'],
                budget: { min: 5, max: 10 }
            },
            sortDirection: 'dsc',
            products: [],
            loading: true
        };

        const action = {
            type: CLEAR_ALL
        };

        const res = filterReducer(currentState, action);
        expect(res).toEqual(initialState);
    });


});
