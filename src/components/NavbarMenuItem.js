import React from 'react';

function NavbarMenuItem(props) {
  return (
    <a href={props.url} className="text-base font-medium text-white hover:text-sky-200">
      {props.text}
    </a>
  );
}

export default NavbarMenuItem;
