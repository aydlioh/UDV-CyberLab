import { Button, ButtonProps } from '@/shared/ui';

export const CommentActionButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      type="button"
      fullWidth
      variant="light"
      size="md"
      radius="sm"
      className={`justify-start ${className}`}
      {...props}
    />
  );
};
