import styled from 'styled-components';

export const CartTextContainer = styled.div`
color: ${props => props.list ? "white" : "#5e6c84"};
padding: 4px 10px;
margin-bottom: 8px;
opacity: ${props => props.list ? 1 : .5};
background: ${props => props.list ? "rgba(0,0,0,.15)" : "inherit"};
cursor: pointer;
max-height: 30px;
&:hover{
	background-color: rgba(9,30,66,.08);
    color: ${props => props.list ? "white" : "#172b4d"};
}
`

export const CartAddText = styled.span`
margin-left: 4px;
`