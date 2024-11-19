import { Button, ButtonProps } from '@/shared/ui';

export const ToolButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      type="button"
      fullWidth
      color="primary"
      variant="light"
      size="md"
      radius="sm"
      className={`justify-start ${className}`}
      {...props}
    />
  );
};
