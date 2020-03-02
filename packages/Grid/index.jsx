import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 96%;
    @media only screen and (max-width: 768px) {
        width: 93%;
    }

    padding: 0;
    margin: 0 auto;
    flex-direction: column;

    ${({ md }) => md && `
        max-width: 980px;
    `}

    ${({ lg }) => lg && `
        max-width: 1200px;
    `}

    ${({ sm }) => sm && `
        max-width: 330px;
    `}
    ${({ alignItemsCenter }) => alignItemsCenter && `
        align-items: center;
    `}
`

export const Row = styled.div`
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;

    ${({ row }) => row && `
        flex-direction: row;
    `}

    ${({ justifySpaceAround }) => justifySpaceAround && `
        justify-content: space-around;
    `}

    ${({ justifySpaceBetween }) => justifySpaceBetween && `
        justify-content: space-between;
    `}

    ${({ justifyBottom }) => justifyBottom && `
        justify-content: flex-end;
    `}

    ${({ alignItemsRight }) => alignItemsRight && `
        align-items: flex-end;
    `}

    ${({ alignItemsCenter }) => alignItemsCenter && `
        align-items: center;
    `}

    ${({ responsive }) => responsive && `
        @media only screen and (max-width: 768px) {
            flex-direction: column;
        }
    `}

    ${({ autoWidth }) => autoWidth && `
       width: auto;
    `}

    ${({ paddingRight8 }) => paddingRight8 && `
       padding-right: 24px;
    `}
    ${({ paddingRight2 }) => paddingRight2 && `
       padding-right: 6px;
    `}

    ${({ margin }) => margin && `
       margin: 3px 0;
    `}

    ${({ marginBottom3 }) => marginBottom3 && `
       margin-bottom: 9px;
    `}

    ${({ marginBottom4 }) => marginBottom4 && `
       margin-bottom: 12px;
    `}

    ${({ marginBottom5 }) => marginBottom5 && `
       margin-bottom: 15px;
    `}

    ${({ marginBottom }) => marginBottom && `
       margin-bottom: ${marginBottom * 3}px;
    `}

    ${({ marginTop}) => marginTop && `
       margin-top: ${marginTop}px;
    `}

    ${({ height }) => height && `
       height: ${height}px;
    `}

    ${({ overflowY }) => overflowY && `
       overflow-y: ${overflowY};
    `}

`

