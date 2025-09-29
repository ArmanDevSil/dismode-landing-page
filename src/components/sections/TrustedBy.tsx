import styles from './TrustedBy.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, type IconProp } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const TrustedBy = () => {
  const brandsLogos: string[][] = [
    ['fab', 'react'],
    ['fab', 'css3'],
    ['fab', 'html5'],
  ];

  return (
    <section
      className={`section ${styles.sectionTrustedBy} flex flex-center flex-column`}
    >
      <h2>Trusted By</h2>
      <div className={`container ${styles.containerLogosImg} flex flex-center`}>
        {brandsLogos.map(brandLogo => {
          return (
            <FontAwesomeIcon
              className={styles.icon}
              icon={brandLogo as IconProp}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TrustedBy;
