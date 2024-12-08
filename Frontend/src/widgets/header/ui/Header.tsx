import { HeaderProfile } from '@/features/header-profile';
import { headerNav } from '../const/headerNav';
import { HeaderItem } from './HeaderItem';
import { useAuth } from '@/entities/user';
import { Button } from '@/shared/ui';
import { useNavigation } from '@/shared/hooks';

export const Header = () => {
  const isAuthorized = useAuth(state => state.isAuthorized);
  const { scrollNavigate } = useNavigation();

  return (
    <header className="h-[60px] bg-header sticky top-0 z-10">
      <div className="container h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <Button
            onPress={() => scrollNavigate('/')}
            variant="light"
            radius="sm"
          >
            <h1 className="bg-main-gradient bg-clip-text text-transparent font-w3ip text-[32px] leading-[40px]">
              NEO Lab
            </h1>
          </Button>
          <div className="flex flex-row gap-[24px] items-center">
            <nav>
              <ul className="flex flex-row gap-[24px]">
                {headerNav.map((item, index) => (
                  <li key={index}>
                    <HeaderItem {...item} />
                  </li>
                ))}
              </ul>
            </nav>
            {isAuthorized && <HeaderProfile />}
          </div>
        </div>
      </div>
    </header>
  );
};