import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MenuProps } from '@/index.type';
import { Menu, Icon } from '@/index';

/**
 *
 * check for data-test and className for all sub components
 * callback for menu item click
 *
 */
const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const MenuList = (
  <Menu.List>
    <Menu.Item>Menu Item 1</Menu.Item>
    <Menu.Item>Menu Item 2</Menu.Item>
    <Menu.Item>Menu Item 3</Menu.Item>
  </Menu.List>
);

describe('Menu component snapshot', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as MenuProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Menu {...attr}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
          </Menu.List>
        </Menu>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Menu component with Nesting snapshot', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as MenuProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Menu {...attr}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
            <Menu.SubMenu>
              <Menu.Item className="d-flex align-items-center justify-content-between w-100">
                Menu Item 3
                <Icon name="chevron_right" />
              </Menu.Item>
              <Menu position="right-start">
                <Menu.List>
                  <Menu.Item>Sub Menu Item 1</Menu.Item>
                  <Menu.Item>Sub Menu Item 2</Menu.Item>
                </Menu.List>
              </Menu>
            </Menu.SubMenu>
          </Menu.List>
        </Menu>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Menu component with Trigger snapshot', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as MenuProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Menu {...attr} trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
          </Menu.List>
        </Menu>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Menu component with Grouping', () => {
  it('check for group label', () => {
    const { getByTestId, getAllByTestId } = render(
      <Menu trigger={<Menu.Trigger />}>
        <Menu.Group label="Add">{MenuList}</Menu.Group>
        <Menu.Group label="Actions">{MenuList}</Menu.Group>
      </Menu>
    );

    const trigger = getByTestId('DesignSystem-Menu-Trigger');

    fireEvent.click(trigger);
    const popover = getByTestId('DesignSystem-Menu');
    const groupLabel = getAllByTestId('DesignSystem-Menu-Group-Label')[0];
    const menuGroup = getAllByTestId('DesignSystem-Menu-Group');

    expect(popover).toBeInTheDocument();
    expect(groupLabel).toBeInTheDocument();
    expect(groupLabel).toHaveTextContent('Add');
    expect(menuGroup).toHaveLength(2);
  });

  it('check for group divider', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />}>
        <Menu.Group>{MenuList}</Menu.Group>
        <Menu.Group showDivider={false}>{MenuList}</Menu.Group>
      </Menu>
    );

    const trigger = getByTestId('DesignSystem-Menu-Trigger');

    fireEvent.click(trigger);
    const popover = getByTestId('DesignSystem-Menu');
    const divider = getByTestId('DesignSystem-Divider');

    expect(popover).toBeInTheDocument();
    expect(divider).toBeInTheDocument();
  });
});

describe('Menu component with callback', () => {
  it('check for onClick callback', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item onClick={FunctionValue}>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    fireEvent.click(getByTestId('DesignSystem-Menu-ListItem'));
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('Menu component with Nesting', () => {
  it('check if it renders submenu', () => {
    const { getByTestId, getAllByTestId } = render(
      <Menu trigger={<Menu.Trigger />}>
        <Menu.Group label="Group 1">
          <Menu.List>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>

            <Menu.SubMenu>
              <Menu.Item data-test="Menu-Item" className="d-flex align-items-center justify-content-between w-100">
                Item 3
                <Icon name="chevron_right" />
              </Menu.Item>
              <Menu position="right-start">{MenuList}</Menu>
            </Menu.SubMenu>
          </Menu.List>
        </Menu.Group>
      </Menu>
    );

    const trigger = getByTestId('DesignSystem-Menu-Trigger');

    fireEvent.click(trigger);

    const triggerItem = getByTestId('Menu-Item');
    fireEvent.mouseOver(triggerItem);
    expect(getAllByTestId('DesignSystem-Menu')).toHaveLength(2);
  });
});
