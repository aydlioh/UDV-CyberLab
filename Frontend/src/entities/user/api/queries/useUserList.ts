import { useSuspenseQuery } from '@tanstack/react-query';
import { userApi } from '../services/userAPI';

export const useUserList = () => {
  return useSuspenseQuery({
    queryKey: ['users'],
    queryFn: userApi.getAllUsers,
    staleTime: 2000,
    refetchInterval: 5000,
  });
};
