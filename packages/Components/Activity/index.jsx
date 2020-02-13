import React from 'react'
import * as S from './styles'

const VHActivity = props => {
    return (
        <React.Fragment>
            {props.activities.days.map(activity =>
                <React.Fragment>
                    <S.Item>
                    <S.Elipse></S.Elipse>
                    </S.Item>
                </React.Fragment>
            )}
        </React.Fragment>
    )

}
VHActivity.defaultProps = {
}

VHActivity.propTypes = {
}

export default VHActivity
