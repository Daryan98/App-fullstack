/**
 *
 * FormikTextField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TextField } from '@material-ui/core';
import { get } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { color, successTextHelperStyles } from '../../../styleVariables';
// import messages from '../../containers/App/messages';
// import { makeSelectUpdatedProfileFields } from '../../containers/App/selectors';

const styles = () => ({
  box: {
    position: 'relative',
    width: '100%',
  },
  success: {
    '&:before': {
      borderBottom: '2px solid',
      borderColor: `${color.success} !important`,
    },
  },
  inputLabel: {
    fontSize: 20,
    color: color.gray.default,
    letterSpacing: '0.6px',
  },
  inputPlaceholder: {
    '&::placeholder': {
      fontSize: 16,
      color: color.gray.hover,
    },
  },
  input: {
    fontSize: 20,
    margin: 0,
  },
  inputField: {
    padding: '4px 0 5px',
    color: color.gray.default,
    fontSize: 20,
    '&::placeholder': {
      fontSize: 16,
      color: color.gray.hover,
    },
  },
  fieldLabelShrinked: {
    fontSize: 16,
    color: `${color.gray.hover} !important`,
    transition: 'all .2s',
  },
  formHelper: {
    fontSize: 16,
    marginTop: 10,
  },
  biggertext: {
    fontSize: 20,
  },
  warningBorderColor: {
    '&:after': {
      borderBottomColor: `${color.warningBorderColor} !important`,
      transform: 'scaleX(1)',
    },
  },
  warningColor: {
    color: `${color.warning} !important`,
  },
  removeMargin: {
    margin: 0,
  },
});

function FormikTextField(props) {
  const {
    classes,
    label,
    field,
    form: { errors, touched },
    inputProps,
    minCharsLengthFordAdornmentVisible,
    updatedFields,
    inputLabelProps,
    formHelperTextProps,
    warning,
    noFieldMargin,
    name,
    ...other
  } = props;
  const errorText = get(errors, field.name);
  // const hasError = dirty && errorText !== undefined;
  const hasError = get(touched, field.name) && Boolean(get(errors, field.name));
  const inputValue = get(field, 'value', '');
  const inputValueLength = inputValue ? inputValue.length : 0;
  const showAdornment =
    minCharsLengthFordAdornmentVisible !== undefined
      ? inputValueLength >= minCharsLengthFordAdornmentVisible
      : inputValueLength > 0;
  const adornment =
    get(inputProps, 'endAdornment') && showAdornment ? inputProps.endAdornment : null;
  return (
    <div className={classes.box}>
      <TextField
        className={noFieldMargin && classes.removeMargin}
        label={label}
        margin="normal"
        error={hasError}
        helperText={errorText || ''}
        InputLabelProps={{
          shrink: true,
          classes: {
            root: classnames(
              classes.inputLabel,
              warning && classes.warningColor,
              props.variant === 'outlined' && classes.biggertext,
              props.value && classes.fieldLabelShrinked,
            ),
            focused: classes.fieldLabelShrinked,
          },
          ...inputLabelProps,
        }}
        {...field}
        {...other}
        InputProps={{
          ...inputProps,
          endAdornment: adornment,
          classes: {
            root: classnames(classes.input, warning && classes.warningBorderColor),
            input: classes.inputPlaceholder,
            underline: classes.underline,
          },
        }}
        FormHelperTextProps={
          (formHelperTextProps,
          { classes: { root: classnames(classes.formHelper, warning && classes.warningColor) } })
        }
      />
    </div>
  );
}

FormikTextField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
  }),
  form: PropTypes.shape({
    dirty: PropTypes.bool,
    errors: PropTypes.object,
  }),
  noFieldMargin: PropTypes.bool,
  inputProps: PropTypes.object,
  minCharsLengthFordAdornmentVisible: PropTypes.number,
  enableEndAdornment: PropTypes.bool,
};

export default withStyles(styles)(FormikTextField);
