import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import Myitem from './basic/item';
import Myhome from './basic/home';
import Customerlist from './basic/customer';
import Booklist from './basic/book';
import Myuser from './basic/user';
import Myhook1 from './hooks/hook1';
import Myhook2 from './hooks/hook2';
import Myhook3 from './hooks/hook3';
import Myhook4 from './hooks/hook4';
import MyApi1 from './api/api1';
import MyApi2 from './api/api2';
import MyApi3 from './api/api3';
import NewUser from './api/adduser';
import EditMyUser from './api/edituser';
import MyApi4 from './api/api4';
import MyApi5 from './api/api5';

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/" className='toplink'> Home </Link>
        <Link to="/itemlist" className='toplink'> Item </Link>
        <Link to="/customerlist" className='toplink'> Customer </Link>
        <Link to="/booklist" className='toplink'> Book </Link>
        <Link to="/userlist" className='toplink'> User </Link>
        <Link to="/hook1" className='toplink'> Hook-1 </Link>
        <Link to="/hook2" className='toplink'> Hook-2 </Link>
        <Link to="/hook3" className='toplink'> Hook-3 </Link>
        <Link to="/hook4" className='toplink'> Props-1 </Link>
        <Link to="/api1" className='toplink'> Api-1 </Link>
        <Link to="/api2" className='toplink'> Api-2 </Link>
        <Link to="/api3" className='toplink'> Api-3 </Link>
        <Link to="/api4" className='toplink'> Api-4 </Link>
        <Link to="/api5" className='toplink'> Api-5 </Link>

      </nav>
      <Routes>
        <Route exact path="/" element={ <Myhome /> } />
        <Route exact path="/itemlist" element={ <Myitem /> } />
        <Route exact path="/customerlist" element={ <Customerlist /> } />
        <Route exact path="/booklist" element={ <Booklist /> } />
        <Route exact path="/userlist" element={ <Myuser /> } />
        <Route exact path="/hook1" element={ <Myhook1 /> } />
        <Route exact path="/hook2" element={ <Myhook2 /> } />
        <Route exact path="/hook3" element={ <Myhook3 /> } />
        <Route exact path="/hook4" element={ <Myhook4 /> } />
        <Route exact path="/api1" element={ <MyApi1 /> } />
        <Route exact path="/api2" element={ <MyApi2 /> } />
        <Route exact path="/api3" element={ <MyApi3 /> } />
        <Route exact path="/newuser" element={ <NewUser /> } />
        <Route exact path="/edituser/:userid" element={ <EditMyUser /> } />
        <Route exact path="/api4" element={ <MyApi4 /> } />
        <Route exact path="/api5" element={ <MyApi5 /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;


// Myitem()  - In Java Script
//  <Myitem/>  - In Jsx