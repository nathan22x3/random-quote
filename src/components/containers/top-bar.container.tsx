/** @jsxImportSource @emotion/react */
import { ReactComponent as AutoRenewIcon } from 'assets/icons/auto-renew.svg';
import tw from 'twin.macro';

export interface TopBarProps {
  onRenew?: React.MouseEventHandler<HTMLButtonElement>;
}

const TopBar: React.FunctionComponent<TopBarProps> = (props) => {
  const { onRenew } = props;

  return (
    <nav css={tw`flex justify-end my-10 text-gray-600`}>
      <button
        className="group"
        css={tw`flex items-center gap-x-3 px-4 py-3 hover:(bg-gray-500 text-gray-50) duration-200`}
        onClick={onRenew}
      >
        <span>random</span>
        <AutoRenewIcon css={tw`group-hover:animate-spin`} />
      </button>
    </nav>
  );
};

TopBar.defaultProps = {};

export default TopBar;
