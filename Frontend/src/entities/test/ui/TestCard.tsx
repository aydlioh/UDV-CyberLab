import { TestIcon } from '@/shared/assets/svgs';
import { ITestCard } from '../model/dto/ITestCard';

type TestCardProps = {
  test: ITestCard;
  onClick?: () => void;
  rightContent?: React.ReactNode;
};

export const TestCard = ({ test, onClick, rightContent }: TestCardProps) => {
  return (
    <li
      onClick={onClick}
      className="bg-white h-[64px] rounded-[10px] cursor-pointer hover:bg-white/65 duration-200 drop-shadow-base"
    >
      <div className="flex flex-row justify-between items-center px-4 py-3 h-full">
        <div className="flex flex-row justify-start items-center gap-[10px]">
          <TestIcon className="text-[30px]" />
          <p className="text-[16px]">{test.title}</p>
        </div>
        <div>{rightContent}</div>
      </div>
    </li>
  );
};
