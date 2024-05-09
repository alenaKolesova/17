import { useState } from "react"

export default function App() {

    const [inputText, setInputText] = useState('1')
    let currencies = [
        {
            'name': 'USD',
            'course' : '90'
        },
        {
            'name': 'EUR',
            'course' : '100'
        },
        {
            'name': 'CNY',
            'course' : '15'
        }
    ]

    return (
        <>
            <h3>Введи рубли:</h3>
            <input onChange={(event) => 
                setInputText(event.target.value)
            } value={inputText}/>

            <h3>Купи деньги:</h3>

            {currencies.map(
                (currency, key) => 
                <>
                    <li>{currency.name}: {currency.course * inputText}</li>
                </>
            )}
        </>
    )
}