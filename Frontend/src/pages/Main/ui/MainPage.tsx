import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <section className="h-svh flex">
      <div className="m-auto flex justify-center items-center flex-col gap-4">
        <Link to={'/wwww'}>Login</Link>
      </div>
    </section>
  );
};
