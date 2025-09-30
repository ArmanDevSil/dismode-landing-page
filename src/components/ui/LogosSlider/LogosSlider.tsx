import styles from './LogosSlider.module.css';

import reactLogo from '../../../assets/img/react.svg';
import typescriptLogo from '../../../assets/img/typescript.svg';
import npmLogo from '../../../assets/img/npm.svg';
import css3Logo from '../../../assets/img/css3.svg';
import htmlLogo from '../../../assets/img/html5.svg';
import gitLogo from '../../../assets/img/git.svg';
import githubLogo from '../../../assets/img/github.svg';

const logos: { [key: string]: string } = {
  react: reactLogo,
  typescript: typescriptLogo,
  npm: npmLogo,
  css3: css3Logo,
  html: htmlLogo,
  git: gitLogo,
  github: githubLogo,
};

const LogosSlider = () => {
  const logosNames: string[] = [
    'react',
    'typescript',
    'npm',
    'css3',
    'html',
    'git',
    'github',
  ];

  return (
    <div className={`container ${styles.logosSlider} flex flex-center`}>
      {logosNames.map(logoName => {
        const key: string = crypto.randomUUID();
        return <img src={logos[logoName]} alt={`${logoName} logo`} key={key} />;
      })}
      {logosNames.map(logoName => {
        const key: string = crypto.randomUUID();
        return <img src={logos[logoName]} alt={`${logoName} logo`} key={key} />;
      })}
    </div>
  );
};

export default LogosSlider;
