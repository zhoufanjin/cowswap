import styled from 'styled-components/macro'

import { ExternalLink } from 'legacy/theme'

import { UI } from 'common/constants/theme'

export const ReadMoreLink = styled(ExternalLink)`
  color: var(${UI.COLOR_TEXT1});
  text-decoration: underline;
`
