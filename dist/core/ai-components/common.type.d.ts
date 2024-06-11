/// <reference types="react" />
export declare type TButtonAppearance = 'primary' | 'basic';
export declare type TButtonType = 'button' | 'submit' | 'reset';
export declare type TIconPosition = 'top' | 'bottom';
export declare type TSize2Hierarchy = 'regular' | 'large';
export declare type TSize3Hierarchy = 'regular' | 'medium' | 'large';
export declare type TSize4Hierarchy = 'tiny' | 'regular' | 'medium' | 'large';
export declare type TArrangement = 'horizontal' | 'vertical';
export declare type TSaraStates = 'default' | 'resting';
export declare type TSaraSparkleStates = 'default' | 'listening' | 'short-processing' | 'long-processing';
export declare type TProgressIndicatorStates = 'listening' | 'short-processing' | 'long-processing';
export declare type TBaseHtmlProps<T> = Omit<React.HTMLProps<T>, ''>;