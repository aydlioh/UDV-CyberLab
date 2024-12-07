import { useQuery } from '@tanstack/react-query';
import { userApi } from '../services/userAPI';
import { useEffect } from 'react';
import { useAuth } from '../../model/store';

export const useProfile = () => {
  const setUser = useAuth(state => state.setUser);

  const { data, isPending, isSuccess } = useQuery({
    queryKey: ['auth/profile'],
    queryFn: async () => await userApi.getProfile(),
  });

  useEffect(() => {
    if (isSuccess) {
      setUser(data);
    }
  }, [data, isSuccess, setUser]);

  return { isPending };
};
