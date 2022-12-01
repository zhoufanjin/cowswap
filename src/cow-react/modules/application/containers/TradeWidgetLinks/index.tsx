import { Trans } from '@lingui/macro'
import { Routes } from '@cow/constants/routes'

import { RowFixed } from 'components/Row'
import { LIMIT_ORDERS_ENABLED } from '@cow/constants/featureFlags'
import { FeatureFlag } from '@cow/utils/featureFlags'
import { useMemo } from 'react'
import { useTradeState } from '@cow/modules/trade/hooks/useTradeState'
import { parameterizeTradeRoute } from '@cow/modules/trade/utils/parameterizeTradeRoute'
import * as styledEl from './styled'
import { isBarn } from 'utils/environments'

export function TradeWidgetLinks() {
  const tradeState = useTradeState()

  const tradeContext = useMemo(
    () => ({
      inputCurrencyId: tradeState?.state.inputCurrencyId || undefined,
      outputCurrencyId: tradeState?.state.outputCurrencyId || undefined,
      chainId: tradeState?.state.chainId?.toString(),
    }),
    [tradeState?.state]
  )

  return FeatureFlag.get(LIMIT_ORDERS_ENABLED) || isBarn ? (
    <RowFixed>
      <styledEl.Link activeClassName="active" to={parameterizeTradeRoute(tradeContext, Routes.SWAP)}>
        <styledEl.MenuItem>
          <Trans>Swap</Trans>
        </styledEl.MenuItem>
      </styledEl.Link>

      <styledEl.Link activeClassName="active" to={parameterizeTradeRoute(tradeContext, Routes.LIMIT_ORDER)}>
        <styledEl.MenuItem>
          <Trans>Limit</Trans>
        </styledEl.MenuItem>
        <styledEl.Badge>
          <Trans>Beta</Trans>
        </styledEl.Badge>
      </styledEl.Link>
    </RowFixed>
  ) : (
    <RowFixed>
      <styledEl.MenuItem>
        <Trans>Swap</Trans>
      </styledEl.MenuItem>
    </RowFixed>
  )
}
