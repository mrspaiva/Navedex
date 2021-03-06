import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AddNaver from './pages/AddNaver'
import EditNaver from './pages/EditNaver'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/addnaver' component={AddNaver}/>
        <Route path='/editnaver' component={EditNaver}/>
      </Switch>
    </BrowserRouter>
  )
}