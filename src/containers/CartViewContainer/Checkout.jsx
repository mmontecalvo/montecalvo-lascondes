import { useState } from 'react'

function Checkout({setBuyer, finalizePurchase}) {
    const [ name, setName ] = useState('')
    const [ lastname, setLastame ] = useState('')
    const [ email, setEmail ] = useState('')

    const setInput = (e) => {
        if (e.target.name === 'name'){
            setName(e.target.value);
        } else if (e.target.name === 'lastname'){
            setLastame(e.target.value);
        } else {
            setEmail(e.target.value);
        }

        setBuyer({
            name,
            lastname,
            email
        });
    }

    // const validator = () => {

    // }

    return (
        <form className="form" onSubmit={finalizePurchase}>
            <div className="form__input">
                <label htmlFor=""><span>*</span> Nombre:</label>
                <input name="name" type="text" placeholder="Ingresa tu nombre" required onChange={setInput} />
            </div>
            <div className="form__input">
                <label htmlFor=""><span>*</span> Apellido:</label>
                <input name="lastname" type="text" placeholder="Ingresa tu apellido" required onChange={setInput}/>
            </div>
            <div className="form__input">
                <label htmlFor=""><span>*</span> Email:</label>
                <input name="email1" type="email" placeholder="Ingresa tu email" required onChange={setInput} />
            </div>
            <div className="form__input">
                <label htmlFor=""><span>*</span> Confirmar email:</label>
                <input name="email2" type="text" placeholder="Confirma tu email" required />
            </div>
            <button className="form__btn" type="submit" >Finalizar comprar</button>
        </form>
    )
}

export default Checkout
