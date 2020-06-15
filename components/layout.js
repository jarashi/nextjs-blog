import styled from 'styled-components'

const Container = styled.div`
    padding: 100px;
    background-color: red;
`

function Layout({ children }) {
    return <Container>{children}</Container>
}

export default Layout