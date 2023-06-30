import * as React from 'react';
import { InlineMessage, Text } from '@/index';

export interface HelpTextProps {
  /**
   * Text to be rendered
   */
  message?: string;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
}

export const HelpText = (props: HelpTextProps) => {
  const { error, message } = props;

  if (!message) return null;

  if (error) {
    return <InlineMessage size="small" className="mt-3" appearance="alert" description={message} />;
  }

  return (
    <div className="mt-3">
      <Text appearance="subtle" size="small" weight="medium">
        {message}
      </Text>
    </div>
  );
};

HelpText.displayName = 'HelpText';

export default HelpText;
