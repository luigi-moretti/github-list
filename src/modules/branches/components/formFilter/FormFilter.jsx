import React, { useState, useContext, useEffect } from 'react';
import BaseBox from '../../../../system/components/base/BaseBox';
import BaseTextField from '../../../../system/components/base/BaseTextField';
import BaseIconButton from '../../../../system/components/base/BaseIconButton';
import SearchIcon from '@mui/icons-material/Search'

import { context } from '../../../../system/context';

function FormFilter(props) {
    const ctx = useContext(context);

    const [searchValue, setSearchValue] = useState('');  

    return (
        <BaseBox
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , mb:5 }}
        >
            <BaseTextField
                label='Buscar branches'
                variant='outlined'
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
                autoFocus
                fullWidth
            />
            <BaseIconButton disabled={ctx.loading} type="submit" sx={{ p: '10px' }} aria-label="search" onClick={ (e) => {
                e.preventDefault();
                props.getComputedBranches(searchValue)
              }}>
                  <SearchIcon />
            </BaseIconButton>
        </BaseBox>
    )
}

export default FormFilter;