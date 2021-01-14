import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Switches(props) {
  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState(!state)
    props.headswitch(!state)
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state} onChange={handleChange} name="checkedA" />}
        label={state?"Solved":"Unsolved"}
      />
    </FormGroup>

  );
}
