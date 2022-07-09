import React, {useState, createContext} from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [listProfilesState, setListaProfilesState] = useState({});
    const [loading, setLoading] = React.useState(false);

    return (
        <context.Provider value={{
            listProfilesState,
            setListaProfilesState,
            loading,
            setLoading
        }}>
            {props.children}
        </context.Provider>
    )
}