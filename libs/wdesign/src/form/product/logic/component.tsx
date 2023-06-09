import { Logic } from '@worldprinter/formeasy';
import React from 'react';

const LogicNameContext = React.createContext<string | undefined>(undefined);
const LogicNameProvider = LogicNameContext.Provider;

export const ProductLogicComponent = (props: any) => {
  const name = React.useContext(LogicNameContext);
  const newName = props.name || name;
  if (name === undefined) {
    return <div>Logic component name is required</div>;
  }
  return (
    <Logic
      name={newName}
      exp={'form.values.lastName.length > 5'}
      expTrue={{ a: 1 }}
      // expFalse={{ a: 2 }}
    >
      <LogicNameProvider value={newName}>{props.children}</LogicNameProvider>
    </Logic>
  );
};
