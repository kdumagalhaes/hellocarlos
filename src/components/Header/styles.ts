import styled from 'styled-components'

export const Container = styled.div`
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-bottom: 1px solid ${props => props.theme['dark-liver']};
`

export const Header = styled.header`
    max-width: 70rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.span`
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    position: relative;

    .logo-dot {
        color: ${props => props.theme['azure']};
    }

    .seo-text {
        display: block;
        position: absolute;
        font-size: 1px;
        color: transparent;
    }
`

export const NavMenu = styled.nav`
display: block;
    .nav-list {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .nav-item {
        padding: 0.5rem;
        transition: border-bottom 0.4s;

        a {
            color: ${props => props.theme['light-gray']};
            text-decoration: none;
            transition: color 0.3s;
            font-size: 1.1rem;

            &:hover {
                color: ${props => props.theme['azure']};
            }
        }
    }

    @media (max-width: 480px) {
        display: none;
    }
`