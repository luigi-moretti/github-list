import React, { useContext } from 'react';
import BaseList from '../../../../system/components/base/BaseList';
import BaseListItem from '../../../../system/components/base/BaseListItem';
import BaseListItemText from '../../../../system/components/base/BaseListItemText';
import BaseDivider from '../../../../system/components/base/BaseDivider';
import BaseListItemAvatar from '../../../../system/components/base/BaseListItemAvatar';
import BaseContainer from '../../../../system/components/base/BaseContainer';
import BaseTypography from '../../../../system/components/base/BaseTypography';
import BaseAvatar from '../../../../system/components/base/BaseAvatar';
import { useParams } from 'react-router-dom';
import EmptyPackgeImage from '../../../../system/assets/images/empty_package.svg'

import { context } from '../../../../system/context';

export default function ListCommits() {

  const ctx = useContext(context);
  const { idProfile, idRepository } = useParams();

  return (
    <React.Fragment>
      <BaseTypography variant="h5" align="center">Lista de Commits</BaseTypography>
      <BaseTypography variant="h6" align="center">De {idProfile} / {idRepository}</BaseTypography>
      <BaseList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          ctx.listCommitsComputedState.length > 0 ?
            ctx.listCommitsComputedState.map(commit => {
              return (
                <React.Fragment key={commit.sha}>
                  <BaseListItem alignItems="flex-start">
                    <BaseListItemAvatar>
                      <BaseAvatar alt={`${commit.name} avatar`} src={commit.avatar_url} />
                    </BaseListItemAvatar>
                    <BaseListItemText
                      primary={`Autor: ${commit.commit.author.name}`}
                      secondary={
                        <React.Fragment>
                          <BaseTypography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {commit.commit.author.date}
                          </BaseTypography>
                          {commit.commit.message ? ` — Mensagem: ${commit.commit.message} ` : ''}
                        </React.Fragment>
                      }
                    />
                  </BaseListItem>
                  <BaseDivider variant="inset" component="li" />
                </React.Fragment>
              )
            })
            :
            <BaseContainer sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <BaseTypography variant="h6" style={{ marginTop: "25px" }}>Nenhum Commit encontrado</BaseTypography>
              <BaseContainer>
                <img style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: '15px',
                  maxWidth: '100%'
                }} alt="logotipo" src={EmptyPackgeImage} />
              </BaseContainer>
            </BaseContainer>
        }
      </BaseList>
    </React.Fragment>
  );
}
