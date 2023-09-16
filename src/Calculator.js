import React, { useState } from 'react'

const Calculator = () => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)

    const validation = () => {
        if (!input1 || !input2 || isNaN(input1) || isNaN(input2)) {
            setError("Please Enter valid Numbers");
            return false;
        }
        setError(null)
        return true;
    }

    const Addition = () => {
        if (validation()) {
            setResult(parseFloat(input1) + parseFloat(input2))
            setError(null)
        }
    }
    const Subtraction = () => {
        if (validation()) {
            setResult(parseFloat(input1) - parseFloat(input2))
            setError(null)
        }

    }
    const Multiplication = () => {
        if (validation()) {
            setResult(parseFloat(input1) * parseFloat(input2))
            setError(null)
        }
    }
    const Division = () => {
        if (validation()) {
            if (input2 !== "0") {
                setResult(parseFloat(input1) / parseFloat(input2))
                setError(null)
            }
            else {
                setError("Division By Zero is not allowed");
                setResult(null)
            }
        }


    }

    return (
        <div className='container'>
            <div className='calculator'>
                <h1>React Calculator</h1>
                <input type="text" value={input1} placeholder='Num 1' onChange={(e) => { setInput1(e.target.value) }} />
                <input type="text" value={input2} placeholder='Num 2' onChange={(e) => { setInput2(e.target.value) }} />
                <div className='buttons'>
                    <button onClick={Addition}>+</button>
                    <button onClick={Subtraction}>-</button>
                    <button onClick={Multiplication}>*</button>
                    <button onClick={Division}>/</button>
                </div>
                <div className="error">
                    {error ? (
                        <p className="red">{error}</p>
                    ) : result != null ? (
                        <p className="green">success</p>
                    ) : null}
                </div>
                <div className="success">
                    {" "}
                    {result != null ? `Result: ${result}` : null}
                </div>
            </div>
        </div>
    )
}

export default Calculator