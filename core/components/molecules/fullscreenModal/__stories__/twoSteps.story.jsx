import * as React from 'react';
import { Button, Paragraph, Text, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';

export const twoSteps = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={{
          heading: 'This is modal Heading',
          subHeading: 'This is modal subheading',
          backButton: !!page,
          backButtonCallback: () => setPage(0),
        }}
        footer={
          <>
            {page === 0 && (
              <Button appearance="primary" onClick={() => setPage(1)}>
                Next
              </Button>
            )}
            {page === 1 && (
              <>
                <Button appearance="primary">Submit</Button>
                <Button appearance="basic" onClick={() => setPage(0)} className="ml-4">
                  Back
                </Button>
              </>
            )}
          </>
        }
      >
        {page === 0 && (
          <>
            <Text>Fullscreen Modal Body</Text>
            <Heading size="s">Description Title</Heading>
            <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
            <Paragraph>
              Card Sections include supporting text like an article summary or a restaurant description.
            </Paragraph>
          </>
        )}
        {page === 1 && (
          <>
            <Text>This is some info</Text>
            <Heading size="s">Second screen</Heading>
            <Paragraph>
              This screen may be used as info screen or read more, for multiple step forms please use steppers.
            </Paragraph>
            <Paragraph>
              Card Sections include supporting text like an article summary or a restaurant description.
            </Paragraph>
          </>
        )}
      </FullscreenModal>
    </div>
  );
};

const customCode = `
() => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>

      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={{
          heading: 'This is modal Heading',
          subHeading: 'This is modal subheading',
          backButton: !!page,
          backButtonCallback: () => setPage(0)
        }}
        footer={(
          <>
            {page === 0 && (
              <Button appearance="primary" onClick={() => setPage(1)}>
                Next
              </Button>
            )}
            {page === 1 && (
              <>
                <Button appearance="primary" onClick={() => console.log("Submit button clicked")}>
                  Submit
                </Button>
                <Button appearance="basic" onClick={() => setPage(0)} className="ml-4">
                  Back
                </Button>
              </>
            )}
          </>
        )}
      >
        {page === 0 && (
          <>
            <Text>Fullscreen Modal Body</Text>
            <Heading size="s">Description Title</Heading>
            <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
            <Paragraph>Card Sections include supporting text like an article summary or a restaurant description.</Paragraph>
          </>
        )}
        {page === 1 && (
          <>
            <Text>This is some info</Text>
            <Heading size="s">Second screen</Heading>
            <Paragraph>
              This screen may be used as info screen or read more, for multiple step forms please use steppers.
            </Paragraph>
            <Paragraph>Card Sections include supporting text like an article summary or a restaurant description.</Paragraph>
          </>
        )}
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/FullscreenModal/Two Steps',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'FullscreenModal',
        noHtml: true,
      },
    },
  },
};
