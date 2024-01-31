
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<div className='rtx'>
<h4 className='toy'>ittrainingclasses.in</h4>
<div className='ctr'>
<Link to ="/">Home</Link>
</div>
<div className='vrt'>
<Link to="/contact">Contact</Link>
 </div>
 </div>  

);
};

export default Navbar;
