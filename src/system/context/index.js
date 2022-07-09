import React, {useState, createContext} from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [listProfilesState, setListaProfilesState] = useState({});
    const [loading, setLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState({})

    return (
        <context.Provider value={{
            listProfilesState,
            setListaProfilesState,
            loading,
            setLoading,
            alertMessage,
            setAlertMessage,
            openAlert,
            setOpenAlert
        }}>
            {props.children}
        </context.Provider>
    )
}