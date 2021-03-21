import { SEARCH_USERS, CLEAR_USERS, GET_REPOS, GET_USER, SET_LOADING } from '../types'

const handlers = {
    [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [CLEAR_USERS]: state => ({...state, users: []}),
    [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
    [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const githubReduser = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}