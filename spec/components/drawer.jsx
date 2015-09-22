/* global React */

import Button from '../../components/button';
import Drawer from '../../components/drawer';

export default React.createClass({
  displayName: 'DrawerTest',

  onClick (ref, method) {
    this.refs[ref][method]();
  },

  render () {
    return (
      <section>
        <h2>Drawer</h2>
        <Drawer ref='left' hideable={true}>
          <h2>Officia deserunt mollit.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Drawer>

        <Drawer ref='right' type='right'>
          <Button label='Close' onClick={this.onClick.bind(null, 'right', 'hide')} />
        </Drawer>

        <nav>
          <Button className='accent' label='Show drawer left' type='raised' onClick={this.onClick.bind(null, 'left', 'show')} />
          <Button className='primary' label='Show drawer left' type='raised' onClick={this.onClick.bind(null, 'right', 'show')} />
        </nav>
      </section>
    );
  }
});