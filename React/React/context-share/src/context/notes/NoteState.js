
import React, { useContext, useState } from 'react'
import NoteContext from './noteContext'

function NoteState(props) {

    const s1 = {
        "name": "harry",
        "class": "5b"
    }
    const [state, setState] = useState(s1)

    const update = () => {


        setTimeout(() => {
            setState({
                "name": "Vijay",
                "class": "10b"

            })
        }, 5000)

    }


    return (

        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState