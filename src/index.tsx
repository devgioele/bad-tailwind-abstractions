import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './styles/index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOMClient.createRoot(document.getElementById('root')!)
root.render(<App />)
