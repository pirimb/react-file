export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type photosType = {
    small: string | null,
    large: string | null,
}
export type profileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: contactsType
    photos: photosType
}