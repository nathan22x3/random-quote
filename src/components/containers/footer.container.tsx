/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <footer css={tw`py-7 font-montserrat text-sm text-center text-gray-300`}>
      <span>
        created by
        <a
          href="https://github.com/nathan22x3"
          target="_blank"
          rel="noopener noreferrer"
          css={tw`font-bold underline`}
        >
          {' '}
          nathan22x3{' '}
        </a>
        - devChallenges.io
      </span>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
