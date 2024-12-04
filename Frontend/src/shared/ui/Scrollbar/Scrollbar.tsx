import SimpleBar from 'simplebar-react';

export const Scrollbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SimpleBar className="max-h-svh" forceVisible="y">
      {children}
    </SimpleBar>
  );
};
