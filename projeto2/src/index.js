import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// import React, { useState } from "react";
// import { NewTask } from "./components/componentsLista/newTask";
// import { ListItens } from "./components/componentsLista/listItems";
// import MainContainer from './components/main';
// import Header from './components/header';
// import Content from "./components/content";
// import { Button } from "./components/buttons/styles";

// export default function Lista() {
//     const [tasks, setTasks] = useState([]);

//     const addNewTask = (task) => {
//         const itensCopy = Array.from(tasks);
//         itensCopy.push({ id: tasks.length, value: task });
//         setTasks(itensCopy);
//     };
//     const updateTask = ({ target }, index) => {
//         const itensCopy = Array.from(tasks);
//         itensCopy.splice(index, 1, { id: index, value: target.value });
//         setTasks(itensCopy);
//     };
//     const deleteTask = (index) => {
//         const itensCopy = Array.from(tasks);
//         itensCopy.splice(index, 1);
//         setTasks(itensCopy);
//     };

//     const editTask = (index) => {
//         const itensCopy = Array.from(tasks);
//         itensCopy.push({value: tasks});
//         setTasks(itensCopy);
//     };
    
//     return (
//         <MainContainer>
//             <Header>Unidades</Header>
//             <Content>
//                 <div>
//                 <h2>Lista de unidades</h2>
//                     <NewTask onSubmit={addNewTask} />
//                     {tasks.map(({ id, value }, index) => (
//                         <ListItens
//                             key={id}
//                             value={value}
//                             onDelete={() => deleteTask(index)}
//                             onChange={(event) => updateTask(event, index)}
//                             onChange={(event) => editTask(event, index)}
//                         />
//                     ))}
//                 </div>
//                 <div>
//                     <pre>{JSON.stringify(tasks, null)}</pre>

                    
//                 </div>


//             </Content>
//         </MainContainer>
//     )
// }