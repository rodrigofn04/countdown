import React, {useState} from 'react'

const CountdownContext = React.createContext(null)

const CountdownProvider = ({ children }) => {
    const [event, setEvent] = useState({
        title: "",
        date: "",
        image: "",
        color: "",
        description: ""
    });

    return(
        <CountdownContext.Provider value={{ event, setEvent }}>
            {children}
        </CountdownContext.Provider>
    )

  }

export { CountdownContext, CountdownProvider }