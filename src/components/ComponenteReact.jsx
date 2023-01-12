import React, {useState} from 'react'

export default function ComponenteReact() {
    const [cliente, setCliente] = useState('Juan')

    console.log('Solo Cliente')
    return (
        <div>{cliente}</div>
    )
}