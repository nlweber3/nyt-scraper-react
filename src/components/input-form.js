import React from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import './input-form.css';

const Form = props => (
<form className='form'>
<FormGroup>
<FormControl className='form' type="text" placeholder="Topic" />
</FormGroup>
<FormGroup>
    <FormControl className='form' type="text" placeholder="Start Year" />
  </FormGroup>
  <FormGroup>
    <FormControl className='form' type="text" placeholder="End Year" />
  </FormGroup>
  <Button type="submit">SEARCH</Button>
  </form>
  
);

export default Form;