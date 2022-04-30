export const EVENT_TYPES = {
    INIT: "INIT",
    RECORD: {
        START: "START",
        APPEND: "APPEND",
        STOP: "STOP"
    },
    SIGNALING: {
        ANSWER: "SIGNALING_ANSWER",
        OFFER: "SIGNALING_OFFER",
        NEW_ICE: "NEW_ICE_CANDIDATE",
        ENDED: "ENDED",
        FAILED: "FAILED",
        CANCEL: "CANCEL",
        REJECT: "REJECT",
        TIME_EXCEED: "TIME_EXCEED"
    },
    CALL: {
        CHANGE: "CHANGE_CALL",
        HOLD: "HOLD"
    }
}

export const WS_ERR_STATUS = "error"
