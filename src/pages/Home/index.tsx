import { Play, HandPalm } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { 
HomeContainer, 
StartCountdownButton, 
StopCountdownButton, 
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Cowntdown'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60),

})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const {activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues:{
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>
            <FormProvider {...newCycleForm}>
              <NewCycleForm /> 
            </FormProvider>
            <Countdown />
          {activeCycle ? (
            <StopCountdownButton onClick={interruptCurrentCycle}>
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled}>
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </HomeContainer>
    )
}
