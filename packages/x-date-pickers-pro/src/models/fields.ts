import * as React from 'react';
import { SlotComponentProps } from '@mui/base/utils';
import { BaseFieldProps, UseFieldResponse } from '@mui/x-date-pickers/internals';
import {
  BaseSingleInputPickersTextFieldProps,
  FieldRef,
  FieldSection,
  PickerValidDate,
} from '@mui/x-date-pickers/models';
import { UseClearableFieldResponse } from '@mui/x-date-pickers/hooks';
import { SxProps } from '@mui/material/styles';

export interface RangeFieldSection extends FieldSection {
  dateName: 'start' | 'end';
}

export type FieldType = 'single-input' | 'multi-input';

/**
 * Props the `textField` slot of the multi input field can receive when used inside a picker.
 */
export interface MultiInputFieldSlotTextFieldProps {
  label?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onKeyDown?: React.KeyboardEventHandler;
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  focused?: boolean;
  InputProps?: {
    ref?: React.Ref<any>;
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
  };
}

/**
 * Props the `root` slot of the multi input field can receive when used inside a picker.
 */
export interface MultiInputFieldSlotRootProps {
  onBlur?: React.FocusEventHandler;
}

export interface MultiInputFieldRefs {
  unstableStartFieldRef?: React.Ref<FieldRef<RangeFieldSection>>;
  unstableEndFieldRef?: React.Ref<FieldRef<RangeFieldSection>>;
}

/**
 * Props the multi input field can receive when used inside a picker.
 * Only contains what the MUI components are passing to the field,
 * not what users can pass using the `props.slotProps.field`.
 */
export interface BaseMultiInputFieldProps<
  TValue,
  TDate extends PickerValidDate,
  TSection extends FieldSection,
  TEnableAccessibleFieldDOMStructure extends boolean,
  TError,
> extends Omit<
    BaseFieldProps<TValue, TDate, TSection, TEnableAccessibleFieldDOMStructure, TError>,
    'unstableFieldRef'
  > {
  sx?: SxProps<any>;
  unstableStartFieldRef?: React.Ref<FieldRef<RangeFieldSection>>;
  unstableEndFieldRef?: React.Ref<FieldRef<RangeFieldSection>>;
  slots?: {
    root?: React.ElementType;
    separator?: React.ElementType;
    textField?: React.ElementType;
  };
  slotProps?: {
    root?: SlotComponentProps<
      React.ElementType<MultiInputFieldSlotRootProps>,
      {},
      Record<string, any>
    >;
    textField?: SlotComponentProps<
      React.ElementType<MultiInputFieldSlotTextFieldProps>,
      {},
      { position?: 'start' | 'end' } & Record<string, any>
    >;
  };
}

/**
 * Props the text field receives when used with a multi input picker.
 * Only contains what the MUI components are passing to the text field, not what users can pass using the `props.slotProps.textField`.
 */
export type BaseMultiInputPickersTextFieldProps<
  TEnableAccessibleFieldDOMStructure extends boolean,
> = UseClearableFieldResponse<
  UseFieldResponse<TEnableAccessibleFieldDOMStructure, MultiInputFieldSlotTextFieldProps>
>;

/**
 * Props the text field receives when used with a single or multi input picker.
 * Only contains what the MUI components are passing to the text field, not what users can pass using the `props.slotProps.field` or `props.slotProps.textField`.
 */
export type BasePickersTextFieldProps<TEnableAccessibleFieldDOMStructure extends boolean> =
  BaseSingleInputPickersTextFieldProps<TEnableAccessibleFieldDOMStructure> &
    BaseMultiInputPickersTextFieldProps<TEnableAccessibleFieldDOMStructure>;
