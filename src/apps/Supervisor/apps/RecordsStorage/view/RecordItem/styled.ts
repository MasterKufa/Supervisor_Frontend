import { keyframes } from "@emotion/css"
import styled from "@emotion/styled"
import { COLORS, withOpacity } from "config/globalStyles/colors"
import { CSS_CONSTANTS } from "config/globalStyles/common"
import InfoSvg from "Supervisor/icons/info.svg"
import { CallStatus } from "Supervisor/redux/reducers/api/types"

export const RecordItemContainer = styled.div<{ header?: boolean }>`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    border-radius: ${CSS_CONSTANTS.borderRadius};
    background: ${withOpacity(COLORS.deepLightDark, 0.4)};
    margin-top: 10px;
    border: 1px solid ${COLORS.deepLightDark};
    gap: 20px;

    &:hover {
        background: ${withOpacity(COLORS.deepLightDark, 0.7)};
    }

    ${({ header }) =>
        header &&
        `position: sticky; top: 0; left: 0; 
        padding: 0 11px;
        background: ${withOpacity(COLORS.fullDark, 0.5)};
        &:hover {
            background: ${withOpacity(COLORS.fullDark, 0.5)};
        } 
        margin-left: -10px;
        height: 40px; margin-top: -10px; width: calc(100% + 20px);
        border-radius: ${CSS_CONSTANTS.borderRadius} ${CSS_CONSTANTS.borderRadius} 0 0;
        border: none;
        border-bottom: ${CSS_CONSTANTS.borderWidth} solid ${COLORS.primaryMain};
        `}

    &> div {
        width: 100%;
        text-align: center;

        & > div {
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    & > div:nth-child(1) {
        width: 60px;
        flex-basis: 60px;
    }
    & > div:nth-child(2) {
        width: 150px;
        flex-basis: 150px;
        flex-grow: 1;
    }
    & > div:nth-child(3) {
        width: 150px;
        flex-basis: 150px;
        flex-grow: 1;
    }
    & > div:nth-child(4) {
        width: 140px;
        flex-basis: 180px;
        flex-grow: 1;
    }
    & > div:nth-child(5) {
        width: 100px;
        flex-basis: 140px;
    }
    & > div:nth-child(6) {
        width: 80px;
    }
`

export const MoreButton = styled.div`
    mask-image: url(${InfoSvg});
    background-color: ${COLORS.primaryMain};
    mask-repeat: no-repeat;
    mask-size: 21px;
    width: 20px;
    height: 30px;
    mask-position: center;
    cursor: pointer;

    &:hover {
        background-color: ${COLORS.lightMain};
    }
`

const openFrame = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }

    100% {
        opacity: 1;
        height: 300px;
    }

`

const closeFrame = keyframes`
    0% {
        height: 300px;
        opacity: 1;
    }

    100% {
        opacity: 0;
        height: 0;
    }
`

export const MoreInfoContainer = styled.div<{ shown?: boolean; animationOn?: boolean }>`
    opacity: 0;
    animation: ${({ shown, animationOn }) =>
        animationOn ? (shown ? `${openFrame} 0.5s forwards` : `${closeFrame} 0.5s forwards`) : "none"};
    border-radius: ${CSS_CONSTANTS.borderRadius};
    background: ${withOpacity(COLORS.lightSecondary, 0.3)};
    border: 1px solid ${COLORS.primarySecondary};
    margin-top: 2px;
    overflow: hidden;
    padding: ${CSS_CONSTANTS.padding};
    will-change: auto;
`

const StatusToColor: { [key: string]: string } = {
    [CallStatus.active]: COLORS.success,
    [CallStatus.ended]: COLORS.error,
    [CallStatus.failed]: COLORS.error
}

export const CallStatusLabel = styled.div<{ status: CallStatus }>`
    text-transform: capitalize;
    color: ${({ status }) => StatusToColor[status]};
`
