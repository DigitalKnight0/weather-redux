import { AnyAction } from '@reduxjs/toolkit'
import React, { Dispatch, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cityData } from '../../templates'
import {
  updateView,
  selectCity,
  selectTemp
} from './viewSlice'

export function View() {
  const city : string = useSelector(selectCity)
  const temp : number = useSelector(selectTemp)
  const dispatch : Dispatch<AnyAction> = useDispatch()
  
  const handleSearch = (e : React.FormEvent<HTMLFormElement>) : void => 
  {
    e.preventDefault()
    const inputBar : HTMLInputElement = ((e.target as Element).querySelector('.city') as HTMLInputElement)
    const cityName : string | null | undefined = inputBar?.value
    inputBar.value = ""
    fetchData(cityName).then((response : cityData) : void => {
      dispatch(updateView(response));
    })
  }

  const fetchData = async (location: string | null | undefined) : Promise<cityData> =>
  {
    const weatherData : any = await(await(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6f404c6c2feb1ace89f818a103284d50`))).json()
    return {
      city: weatherData.name,
      temp: weatherData.main.temp
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" className="city"/>
        <button type="submit">Search City</button>
      </form>

      <h1>{city}</h1>
      <p>{temp}</p>
    </div>
  )
}