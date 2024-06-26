import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const direction = action.payload === 'up' ? 1 : -1
            return [...state].sort((a, b) => direction * a.name.localeCompare(b.name))
            //return state // need to fix
        }
        case 'check': {

            return state.filter(u => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}

