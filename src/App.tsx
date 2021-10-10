import { AddArea } from './components/addArea'
import { Item } from './types/item'
import { useState } from 'react'
import * as C from './App.styles'
import { ListItem } from './components/listItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id:1, name:'buy bread', done:false},
    {id:2, name:'buy cake', done:true}
  ])

const handleAddTask = (taskName: string) => {
  let newList = [...list]
  newList.push({
    id:list.length + 1,
    name:taskName,
    done:false
  })
  setList(newList)
}
  return (
      <C.Container>
          <C.Area>
              <C.Header>To do list</C.Header>
              {/* AREA DE ADICIONAR NOVA TAREFA */}
              <AddArea onEnter={handleAddTask} />
              {/* LISTA DE TAREFAS */}
              {list.map((item, index) => (
                  <ListItem key={index} item={item} />
              ))}
          </C.Area>
      </C.Container>
  );
}

export default App