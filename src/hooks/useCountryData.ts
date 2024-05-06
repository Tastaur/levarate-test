import {useEffect, useState} from "react";
import {Country} from "../DataApi/country.interface";
import {getCountries} from "../DataApi";

const requestCountries = async () => {
    const data = await getCountries({search: ''})
    return data.searchResults
}


export const useCountryData = () => {
    const [countries, setCountries] = useState<Record<string, Country>>({})
    const [error, setError] = useState('')
    const [loading, setIsLoading] = useState(false)
    useEffect(() => {
        new Promise<Country[]>((resolve) => {
            setIsLoading(true)
            const data = requestCountries()
            resolve(data)
        }).then(d => {
            const newData = d.reduce((acc, item) => {
                acc[item.alpha2Code] = item
                return acc
            }, {} as Record<string, Country>)
            setCountries(newData)
        }).catch(() => setError('Country not found'))
            .finally(() => setIsLoading(false))

    }, []);

    return {
        countries,
        error,
        loading
    }
}