import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Icons from './Icons'
import ButtonAppBar from './ButtonAppBar'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function M001(props) {
  return (
    <div>
      <p>Molecule 01</p>
      <ButtonAppBar appBarTitle={'Molecule 01 - App Bar Title'} appBarPosition={'static'} appBarColor={'secondary'}/>
      <Icons />
    </div>
  );
}

M001.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(M001);
