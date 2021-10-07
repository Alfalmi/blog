import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

import Link from '../../../link/link';

const getLinks = (links) => {
  const linkComponents = {
    people: (
      <Link key="posts" to="/posts">
        <FontAwesomeIcon icon={faCode} />
        Posts
      </Link>
    ),
    publications: (
      <Link key="about" to="https://alfalmi.com/">
        <FontAwesomeIcon icon={faIdCardAlt} />
        Acerca de
      </Link>
    ),
  };

  return (
    <>
      {links.map((link) => linkComponents[link])}
    </>
  );
};

export default getLinks;
