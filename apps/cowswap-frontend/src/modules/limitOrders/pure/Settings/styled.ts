import { transparentize } from 'polished'
import styled from 'styled-components/macro'

import { UI } from 'common/constants/theme'

export const SettingsTitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  color: var(${UI.COLOR_TEXT1});
  margin: 0 0 12px 0;
`

export const SettingsContainer = styled.div`
  margin: 12px 0 0;
  padding: 16px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow2};
  border: 1px solid ${({ theme }) => transparentize(0.95, theme.white)};
  background: var(${UI.COLOR_CONTAINER_BG_01});
  color: var(${UI.COLOR_TEXT1});
`

export const SettingsBox = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }

  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
`

export const SettingsBoxTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  color: var(${UI.COLOR_TEXT1});
  font-size: 14px;
  opacity: 0.85;
  margin-right: 2rem;
`
