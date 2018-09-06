export interface ICharacter {
    count : number,
    next : string,
    previous : string,
    results : IResult
}

export interface IResult {
    name: string, 
    height: number,
    mass:number
}