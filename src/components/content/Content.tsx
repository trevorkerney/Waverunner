import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nest from './nest/Nest'
import Item from './item/Item'

import './Content.css'

const Content = (props: {}) => {
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Nest media={null} />
            }
          />
          <Route
            path='/nest/:path'
            element={
              <Item nest={null} />
            }
          />
          <Route
            path="/item/:path"
            element={
              <Item nest={null} />
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default Content;
