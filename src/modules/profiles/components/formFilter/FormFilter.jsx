import BaseBox from '../../../../system/components/base/BaseBox';
import BaseTextField from '../../../../system/components/base/BaseTextField';
import BaseInputAdornment from '../../../../system/components/base/BaseInputAdornment';
import BaseIconButton from '../../../../system/components/base/BaseIconButton';
import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState, useContext } from 'react';

import { context } from '../../../../system/context';

function FormFilter(props) {

    const [searchValue, setSearchValue] = useState('');
    const ctx = useContext(context);

    return (
        <BaseBox
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' , mb:5 }}
        >
            <BaseTextField
                label='Pesquisar perfil'
                variant='outlined'
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
                autoFocus
                InputProps={{
                    startAdornment: (
                      <BaseInputAdornment position="start">
                        <AccountCircle />
                      </BaseInputAdornment>
                    ),
                  }}
                fullWidth
            />
            <BaseIconButton disabled={ctx.loading} type="submit" sx={{ p: '10px' }} aria-label="search" onClick={ (e) => {
                e.preventDefault();
                ctx.setLoading(true);
                props.getProfiles(searchValue)
              }}>
                  <SearchIcon />
            </BaseIconButton>
        </BaseBox>
    )
}

export default FormFilter