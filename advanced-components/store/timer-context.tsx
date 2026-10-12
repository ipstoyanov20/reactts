import {createContext, useContext, useReducer, useState, type ReactNode} from 'react'

export type Timer = {
    name: string
    duration: number
}

type TimerState = {
    isRunning: boolean
    timers: Timer[]
}

const initialState: TimerState = {
    isRunning: false,
    timers:[]
}

type TimerContextValue = TimerState & {
    addTimers: (timerData: Timer)=>void,
    startTimers: ()=>void,
    stopTimers: ()=>void
}


const TimersContext = createContext<TimerContextValue|null>(null)

export function useTimersContext(){
  const timersCtx = useContext(TimersContext)
  if(timersCtx === null){
    throw new Error("asdasdasd")
  }
  return timersCtx
}

type TimersContextProviderProps = {
    children: ReactNode
}

type StartTimersAction = {
    type: 'START_TIMERS'
}
type StopTimersAction = {
    type: 'STOP_TIMERS'
}
type AddTimerAction = {
    type:'ADD_TIMERS',
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction
const reducer = (state: TimerState, action:Action): TimerState =>{
    if(action.type === 'START_TIMERS'){
        
        return{
            ...state,
            isRunning: true
        }
    }
    else if(action.type === 'STOP_TIMERS'){
        return{
            ...state,
            isRunning: false
        }
    }
    else if(action.type === 'ADD_TIMERS'){
        return{
            ...state,
            timers: [
                ...state.timers,
                {
                    name:action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state
}

export default function TimersContextProvider({children}: TimersContextProviderProps){
    const [timersState, dispatch] = useReducer(reducer, initialState)
    const ctx: TimerContextValue = {
        timers:timersState.timers,
        isRunning: timersState.isRunning,
        addTimers(timerData) {
            dispatch({type: 'ADD_TIMERS', payload: timerData})
        },
        startTimers(){
            dispatch({type: 'START_TIMERS'})
            
        },
        stopTimers() {
            dispatch({type: 'STOP_TIMERS'})
            
        },
    }
    return <TimersContext.Provider value={ctx}>{children
    }</TimersContext.Provider>
}