import { COLORS } from "config/globalStyles/colors"
import { first, inRange } from "lodash"
import { ascend, compose, concat, groupBy, groupWith, map, prop, sort, sortBy } from "ramda"
import {
    CallSide,
    ConvertedTrscrtUnitGroup,
    RecordTranscription,
    TranscriptionUnit,
    TranscriptionUnitWithSide
} from "Supervisor/redux/reducers/api/types"
import { CallRole } from "./types"

export const countRecordAuthenticityRate = (transcript?: RecordTranscription) => {
    if (!transcript) return null

    const common = transcript.callee.concat(transcript.caller)

    if (!common.length) return null

    return countAuthenticityRate(common)
}

export const countAuthenticityRate = (units: TranscriptionUnit[]) =>
    units.length ? Math.round((units.reduce((acc, val) => Number(acc) + Number(val.conf), 0) / units.length) * 100) : 0

export const makeCommonTranscriptList = (transcript: RecordTranscription): ConvertedTrscrtUnitGroup[] =>
    compose(
        map((data: TranscriptionUnitWithSide[]) => ({ data, side: first(data)!.side })),
        groupWith((a, b) => a.side === b.side),
        sort<TranscriptionUnitWithSide>(ascend((x) => Number(prop("start", x)))),
        concat(transcript.caller.map((unit) => ({ ...unit, side: CallRole.caller }))),
        map((unit: TranscriptionUnit) => ({ ...unit, side: CallRole.callee }))
    )(transcript.callee)

export const AuthenticityToColor = (val: number) => {
    if (inRange(val, 50)) return COLORS.error1
    if (inRange(val, 90)) return COLORS.success

    return COLORS.primaryMain
}
