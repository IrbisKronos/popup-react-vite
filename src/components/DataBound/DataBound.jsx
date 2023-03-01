import deepGet from 'lodash/get';
import deepSet from 'lodash/set';
import React, { useCallback, useEffect, useState } from 'react';

export default function DataBound(ComponentClass) {
  function DataBoundComponent({ debug, name, context, ...props }) {
    const contextValue = deepGet(context, name, '');
    const [value, setValue] = useState(contextValue);
    useEffect(() => {
      setValue(contextValue);
    }, [contextValue]);

    const onChange = useCallback(
      (e) => {
        const newValue = e.target.value;
        deepSet(context, name, newValue);
        setValue(newValue);
        if (debug) {
          console.log(context);
        }
      },
      [context, name]
    );

    return (
      <ComponentClass
        {...props}
        name={name}
        value={type === 'radio' ? id : value}
        onChange={onChange}
      />
    );
  }

  DataBoundComponent.displayName = `DataBound(${ComponentClass.displayName})`;

  return DataBoundComponent;
}
