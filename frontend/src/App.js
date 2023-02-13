import './App.css';

// boostrap-libs
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom';
import USER_REG from './component/user_reg';
import FAQ_TABLE from './component/faq_table';
import USER_LOGIN from './component/user_login';
import Panel from './component/navbar';
import Addtask from './component/addtask';
import Edittask from './component/editTask';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Panel />
        <Routes>
          <Route exact path="/faq" element={<FAQ_TABLE />}> </Route>
          <Route exact path="/register" element={<USER_REG />}> </Route>
          <Route exact path="/login" element={<USER_LOGIN />}> </Route>
          <Route exact path="/addtask" element={<Addtask />}> </Route>
          <Route exact path="/edittask" element={<Edittask />}> </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
