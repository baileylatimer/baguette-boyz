import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: transparent
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  width: 100%;
  max-width: 2000px;
`

export const MenuLink = styled(Link)`
  margin-left: var(--space-sm);
`

export const CartCounter = styled.span`
  background-color: black;

  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

    
     
        
          
            
              