export type AuthPayload = {
    username: string
    password: string
}

export type RegisterPayload = {
    username: string
    password: string
    secret: string
    secretAnswer: string
    email: string
}

export type RecoverPasswordPayload = {
    email: string
    secret: string
    secretAnswer: string
}

export type ChangePasswordPayload = {
    email: string
    secret: string
    secretAnswer: string
}

export type EmittedToken = {
    access_token?: string
    error?: string
}

export enum Roles {
    admin = "admin",
    user = "user",
    supervisor = "supervisor"
}

export type DecodedToken = {
    userName: string
    userId: number
    role: Roles
    webrtcNumber: string
}

export type CallSide = { username: string; webrtcNumber: string; id: number }

export type CurrentCall = {
    callee: CallSide
    caller: CallSide
    status: string
    statusSequence: string[]
    statusTimestampsSequence: string[]
    id: number
}

export enum CallStatus {
    signaling = "signaling",
    answerWaiting = "answerWaiting",
    rejected = "rejected",
    active = "active",
    ended = "ended",
    failed = "failed"
}

export type User = {
    id: number
    username: string
    passwordHash: string
    role: Roles
    secret: string
    secretAnswer: string
    email: string
    webrtcNumber: string
}

export type FindUsersPayload = {
    username: string
    limit: number
}
