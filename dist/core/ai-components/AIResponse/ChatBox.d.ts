import * as React from 'react';
import { TBaseHtmlProps } from "../common.type";
export interface ChatBoxProps extends TBaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    'data-test'?: string;
    className?: string;
}
export declare const ChatBox: (props: ChatBoxProps) => JSX.Element;
export default ChatBox;
