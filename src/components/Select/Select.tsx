import React from 'react';
import { SelectProps, MenuItem } from '@mui/material';
import { StyledSelect, Placeholder, SelectPlaceholder, StyledMenuItem } from './Select.styles';

export interface SelectOption {
  value: any;
  label: string | React.ReactNode;
  id?: any;
}

type SelectExtendedProps<T> = SelectProps & {
  options: Array<SelectOption & T> | [];
  valueField?: keyof (SelectOption | T);
};

export const Select = <T extends object>({
  valueField,
  options,
  placeholder,
  children,
  ...props
}: SelectExtendedProps<T>) => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <StyledSelect
      variant="outlined"
      displayEmpty
      renderValue={selected => {
        if (selected.length === 0) {
          return <Placeholder>{placeholder}</Placeholder>;
        }
        const labels = selected.map(item => item.label);
        return labels.join(', ');
      }}
      onChange={handleChange}
      value={personName}
      // MenuProps={{
      //   PaperProps: {
      //     style: {
      //       backgroundColor: '#fdf5e6a1',
      //     },
      //   },
      // }}
      {...props}
    >
      {children ? (
        children
      ) : options?.length ? (
        options.map((option, index) => (
          <StyledMenuItem
            key={'select-' + index}
            value={valueField ? option[valueField] : (option as any)}
            dense
            sx={{ textOverflow: 'ellipsis', color: 'black' }}
          >
            {option.label}
          </StyledMenuItem>
        ))
      ) : (
        <SelectPlaceholder>No options...</SelectPlaceholder>
      )}
    </StyledSelect>
  );
};
