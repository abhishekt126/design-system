import React from 'react';
import { BaseProps } from "../../../utils/types";
export interface EmptyActionProps extends BaseProps {
    children: React.ReactNode;
}
declare const EmptyStateActions: (props: EmptyActionProps) => JSX.Element;
export default EmptyStateActions;