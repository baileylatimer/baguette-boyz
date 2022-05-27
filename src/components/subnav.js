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
} from './Navigation/styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Subnav = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
	<header className="margin-top-lg width-100vw border-bottom  z-index-3 flex justify-center">
			<Container class="flex justify-between width-100%">
        <div class="menu-right flex items-center">
        <MenuLink className="color-contrast-medium" data-text='projects' to='#projects'>
          /Projects
          </MenuLink>
          <MenuLink className="color-contrast-medium" data-text='Social' to='#social'>
          /Social
          </MenuLink>
          <MenuLink className="color-contrast-medium" data-text='FAQ' to='#faq'>
            /FAQ
          </MenuLink>
        </div>
			</Container>
	</header>
	)
}

Subnav.propTypes = {
	siteTitle: PropTypes.string,
}

Subnav.defaultProps = {
	siteTitle: ``,
}

export default Subnav
