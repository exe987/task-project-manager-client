import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <h2 className='display-5'>Project/Task manager</h2>
        </a>
      </div>
    </nav>
  );
};

export default Header;
