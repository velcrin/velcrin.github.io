import * as React from 'react';
import { Item, List } from '../atoms/List';
import { Link } from '../atoms/Link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faStackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

export const Social = () => (
  <List>
    <Item>
      <Link href="https://github.com/velcrin" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Item>
    <Item>
      <Link
        href="https://stackoverflow.com/users/4265456/vincent-elcrin"
        target="_blank"
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </Link>
    </Item>
    <Item>
      <Link
        href="https://www.linkedin.com/in/vincent-elcrin-a789121a"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </Item>
    <Item>
      <Link href="https://twitter.com/VincentElcrin" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Item>
    <Item>
      <Link href="mailto:vincent.elcrin@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    </Item>
  </List>
);
