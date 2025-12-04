import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { TodoGroup } from "./components/TodoGroup"
import { ToDoForm } from "./components/ToDoForm"
import TodoContext from "./components/TodoProvider/TodoContext"
import { use } from "react"

function App() {

  
  const {todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo } = use(TodoContext)

  

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    openFormTodoDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup 
            heading = "Para estudar"
            items = {todos.filter(t => !t.completed)}
          />
          <TodoGroup 
            heading = "Concluído"
            items = {todos.filter(t => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
             <ToDoForm 
             defaultValue={selectedTodo?.description}
             onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={openFormTodoDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
