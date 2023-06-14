import { Route, Routes } from 'react-router-dom'

import Editor from './editor'
import Preview from './preview'

function App() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <Routes>
                <Route
                    path='/'
                    element={<Editor />}
                />
                <Route
                    path='/preview'
                    element={<Preview />}
                />
            </Routes>
        </div>
    )
}

export default App
