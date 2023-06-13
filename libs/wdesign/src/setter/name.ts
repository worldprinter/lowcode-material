import type { MaterialPropType } from '@worldprinter/lowcode-model'

export const NameSetter: MaterialPropType = {
    name: 'name',
    title: '字段名称',
    valueType: 'string',
    setters: ['StringSetter'],
    condition: (state) => {
        console.log(state, 'state')
        // if (state.type === 'primary') {
        //     return true;
        // }
        return true
    },
}
