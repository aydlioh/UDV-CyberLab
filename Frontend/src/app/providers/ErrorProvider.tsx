import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const Fallback = ({ error }: { error: Error }) => {
  return (
    <section className="flex justify-center items-center w-screen h-svh">
      <div className="text-center max-w-[500px] px-5">
        <h1 className="text-4xl text-rose-500 mb-5 font-w3ip">Error</h1>
        <p className="text-2xl break-all">{error.message}</p>
      </div>
    </section>
  );
};

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  );
};
