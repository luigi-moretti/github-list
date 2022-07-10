import React, {useState, createContext} from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [listProfilesState, setListaProfilesState] = useState({});
    const [listReposState, setListReposState] = useState([]);
    const [listRepoComputedState, setListRepoComputedState] = useState([]);
    const [listBranchState, setListBranchState] = useState([]);
    const [listBranchComputedState, setListBranchComputedState] = useState([]);
    const [listCommitsState, setListCommitsState] = useState([]);
    const [listCommitsComputedState, setListCommitsComputedState] = useState([]);
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
            setOpenAlert,
            listReposState,
            setListReposState,
            listBranchState,
            setListBranchState,
            listCommitsState,
            setListCommitsState,
            listRepoComputedState,
            setListRepoComputedState,
            listBranchComputedState,
            setListBranchComputedState,
            listCommitsComputedState,
            setListCommitsComputedState
        }}>
            {props.children}
        </context.Provider>
    )
}