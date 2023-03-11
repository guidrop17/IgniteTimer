import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { CyclesContext } from "../../../../context/CyclesContext"

export const NewCycleForm = () => {
  const { register } = useFormContext()
  const { activeCycle } = useContext(CyclesContext)

  return(
    <FormContainer>
      <label htmlFor="task">
        Vou trabalhar em
      </label>
      <TaskInput 
      id="task"
      list="task-suggestions"
      placeholder="Dê um nome para o seu projeto"
      disabled={!!activeCycle}
      {...register('task')}
      />

      <datalist id="task-suggestions">
        <option>OPA</option>
        <option>OPA</option>
        <option>OPA</option>
        <option>OPA</option>
      </datalist>

      <label htmlFor="task">
        Durante
      </label>
      <MinutesAmountInput 
      id="minutesAmount"
      placeholder="00"
      min="1"
      max="60"
      step="1"
      disabled={!!activeCycle}
      {...register('minutesAmount', {valueAsNumber: true})}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}