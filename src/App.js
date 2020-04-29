import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

	const usersData = [
		{ id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
		{ id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
		{ id: uuidv4(), name: 'Ben', username: 'benisphere' },
	]

	const [users, setUsers] = useState(usersData)

	const addUser = (user) => {
		user.id = uuidv4()
		console.log(user)
		setUsers([
		  ...users,
		  user
		])
	}

	const deleteUser = (id) => {
		// console.log(id)
		//  setUsers(users.filter(user => user.id !== id))
		const arrayFiltrado = users.filter(user => user.id !== id)
		setUsers(arrayFiltrado)
	}

	const [editing, setEditing] = useState(false);

	const [currentUser, setCurrentUser] = useState({
		id: null, name: '', username: ''
	})

	const editRow = (user) => {
		setEditing(true);
		setCurrentUser({
		  id: user.id, name: user.name, username: user.username
		})
	}

	const updateUser = (id, updateUser) => {
		setEditing(false);
		setUsers(users.map(user => user.id === id ? updateUser : user))
	}

  return (
    <div className="container">
      <h1>CRUD con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
			{
				editing ? (
					<div>
						<h2>Editar usuario</h2>
						  <EditUserForm
						   currentUser={currentUser}
						   updateUser={updateUser}
						/>
					</div>
				) :	(
					<div>
						<h2>Añadir usuario</h2>
		  				<AddUserForm addUser={addUser}/>
					</div>
				)

			}

        </div>
        <div className="flex-large">
          <h2>Lista de usuarios</h2>
		  <UserTable 
				users={users}
				deleteUser={deleteUser}
				editRow= {editRow}
		  />
        </div>
      </div>
    </div>
  )
}

export default App