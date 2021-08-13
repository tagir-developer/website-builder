import styled from 'styled-components'

interface IFlexProps {
	direction?: string
	align?: string
	justify?: string
	margin?: string
}

export const StyledFlex = styled.div<IFlexProps>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};
margin: ${props => props.margin || '0'};
`