import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ActionTypes, addNewCycleAction, interruptedCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { Cycle, CyclesReducer } from "../reducers/cycles/reducer";

interface createCycleData {
    task: string
    minutesAmount: number
}

interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondPassed: (seconds: number) => void
    createNewCycle: (data: createCycleData) => void
    interruptCurrentCycle: () => void
  }

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export const CyclesContextProvider = ({children}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(CyclesReducer, {
      cycles: [],
      activeCycleId: null
    }, 
    (initialState) => {
      const storedStateAsJson = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

      if(storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return initialState
    } 
  )
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondPassed, setAmountSecondPassed] = useState(() => {
    if(activeCycle){
      return differenceInSeconds(
        new Date(), 
        new Date(activeCycle.startDate)
      )
    }
    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const setSecondPassed = (seconds: number) => {
      setAmountSecondPassed(seconds)
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction)
  }
  
  const createNewCycle = (data: createCycleData) => {
      const id = String(new Date().getTime())
      
      const newCycle: Cycle = {
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
        startDate: new Date(),
      }
      
      dispatch(addNewCycleAction)
      setAmountSecondPassed(0)
  }
  
  const interruptCurrentCycle = () => {
    dispatch(interruptedCurrentCycleAction)
  
  }

  return(
      <CyclesContext.Provider 
      value={{
          cycles,
          activeCycle, 
          activeCycleId, 
          amountSecondPassed, 
          markCurrentCycleAsFinished, 
          setSecondPassed,
          createNewCycle,
          interruptCurrentCycle
          }}
      >
          {children}
      </CyclesContext.Provider>


  )
}
