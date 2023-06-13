import { Box, Flex, Stack, Text } from '@worldprinter/wdesign-core'

const InnerProductFormItemComponent: React.FC<any> = ({ style, children, label = 'label', ...props }) => {
    const newStyle: React.CSSProperties = {
        direction: 'row',
        alignItems: 'center',
        ...style,
    }

    return (
        <Flex
            style={newStyle}
            {...props}
        >
            <Stack>
                <Text>{label}</Text>
            </Stack>
            <Box>{children}</Box>
        </Flex>
    )
}

InnerProductFormItemComponent.displayName = 'ProductFormItemComponent'
export const ProductFormItemComponent = InnerProductFormItemComponent
