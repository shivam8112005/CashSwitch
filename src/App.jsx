import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  //const [count, setCount] = useState(0)
  const [amount, setAmount]=useState(0);
  const [from, setFrom]=useState("usd");
  const [to, setTo]=useState("inr");
  const [convertedAMount, setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from);

  const options=Object.keys(currencyInfo);

  return (
    <>
     <h1 className='bg-orange-500 text-3xl'>Cash Switch</h1>
    </>
  )
}

export default App
