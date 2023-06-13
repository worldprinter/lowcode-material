import React from 'react'

import { Logic } from '@worldprinter/formeasy'

const LogicNameContext = React.createContext<string | undefined>(undefined)
const LogicNameProvider = LogicNameContext.Provider

const InnerProductLogicComponent: React.FC<any> = (props) => {
    const name = React.useContext(LogicNameContext)
    const newName = props.name || name
    if (newName === undefined) {
        return <div>Logic component name is required</div>
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
    )
}

InnerProductLogicComponent.displayName = 'ProductLogicComponent'

export const ProductLogicComponent = InnerProductLogicComponent
