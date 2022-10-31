export interface cityData 
{
    city : string,
    temp : number 
}

export interface viewAction
{
    type : string,
    payload : cityData
}