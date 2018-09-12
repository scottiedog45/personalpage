import React from 'react'

import {elastic as Menu } from 'react-burger-menu'
import styled from 'styled-components';
import { media } from '../../../src/style-utils'

const WrappedMenu = styled(Menu)`
  
`

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '18px'
  },
  bmBurgerBars: {
    height: 1,
    background: 'blue'
  },
  bmCrossButton: {
    height: '30px',
    width: '30px'
  },
  bmCross: {
    background: 'black'
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: 'white'
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class MobileMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  showSettings (event) {
    event.preventDefault();
  }

  toggleMenu(event) {
    if (this.state.open === true) {
      event.preventDefault();
      this.setState({
        open: false
      })
    }
  else return
  }

  

  render() {
    return (
      <WrappedMenu onClick={() => console.log('clicked')} right pageWrapId={'page-wrap'} outerContainerId={'outer-container'} styles={styles} > 
        <a id={'bioLink'} className='menu-item' href='#bio'>about</a>
        <a id={'projectLink'} className='menu-item' href='#projects'>projects</a>
        <a id={'contactLink'} className='menu-item' href='#contact'>contact</a>
      
      </WrappedMenu>
    )
  }

}

export default MobileMenu