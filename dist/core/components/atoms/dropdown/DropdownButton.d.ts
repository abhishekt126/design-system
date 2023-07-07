import * as React from 'react';
export declare type DropDownButtonSize = 'tiny' | 'regular';
export interface TriggerProps {
    triggerSize?: DropDownButtonSize;
    icon?: string;
    placeholder?: string;
    inlineLabel?: string;
    disabled?: boolean;
    menu?: boolean;
    error?: boolean;
}
export interface DropdownButtonProps extends TriggerProps {
    children?: React.ReactText;
    open?: boolean;
}
declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default DropdownButton;
