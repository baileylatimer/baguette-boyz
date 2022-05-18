import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Timezone from '~/components/date'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
	<header className="width-100vw border-bottom position-fixed z-index-3 flex justify-center">
			<Container class="flex justify-between width-100%">
				<MenuLink className="glitch color-contrast-higher font-display hide show@lg" data-text='Baguette Boyz' to='/'>
					Baguette Boyz
				</MenuLink>
        <MenuLink className="glitch color-contrast-higher font-display hide@lg" data-text='BB' to='/'>
					BB
				</MenuLink>
        <div class="menu-right flex items-center">
          <MenuLink className="color-contrast-higher" data-text='About' to='/about'>
          About
          </MenuLink>
          <MenuLink className="color-contrast-higher" data-text='Roadmap &nbsp; Utility' to='/roadmap'>
            Roadmap
          </MenuLink>
          <MenuLink className="btn btn--primary" data-text='Connect Wallet' to='/mint'>
            Connect
          </MenuLink>
        </div>
			</Container>
	</header>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
