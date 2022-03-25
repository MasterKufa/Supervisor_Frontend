export const EVENT_TYPES = {
    INIT: "INIT",
    RECORD: {
        CAST_REQUEST: "CAST_REQUEST"
    },
    SIGNALING: {
        ANSWER: "SIGNALING_ANSWER",
        OFFER: "SIGNALING_OFFER",
        NEW_ICE: "NEW_ICE_CANDIDATE",
        ENDED: "ENDED",
        FAILED: "FAILED",
        CANCEL: "CANCEL"
    },
    CALL: {
        CHANGE: "CHANGE_CALL"
    }
}

export const WS_ERR_STATUS = "error"
