import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

export const compressed = () => {
  return (
    <EmptyState size="compressed">
      <EmptyState.Image src={noFilesEmptyFiles}></EmptyState.Image>
      <EmptyState.Title>Title goes here</EmptyState.Title>
      <EmptyState.Description>Description goes here</EmptyState.Description>
      <EmptyState.Actions>
        <Button className="mr-4">Secondary action</Button>
        <Button appearance="primary">Primary action</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(noFilesEmptyFiles);

const customCode = `() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
      <EmptyState size="compressed">
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noFilesEmptyFiles}></EmptyState.Image> */}

        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>
          Description goes here
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Sizes/Compressed',
  component: EmptyState,
  subcomponents: {
    'EmptyState.Image': EmptyState.Image,
    'EmptyState.Title': EmptyState.Title,
    'EmptyState.Description': EmptyState.Description,
    'EmptyState.Actions': EmptyState.Actions,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'EmptyState',
        customCode,
      },
    },
  },
};
