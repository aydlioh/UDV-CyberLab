import { useMediaQuery } from '@/shared/hooks';
import { HeaderDesktop } from './desktop/HeaderDesktop';
import { HeaderMobile } from './mobile/HeaderMobile';
import { useProfile } from '@/entities/user';

export const Header = () => {
  useProfile();
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <header className="h-[60px] bg-header sticky top-0 z-[20]">
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};
