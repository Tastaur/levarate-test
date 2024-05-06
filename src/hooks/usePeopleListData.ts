import {useCountryData} from "./useCountryData";
import {usePeopleData} from "./usePeopleData";
import {useMemo, useState} from "react";

export const usePeopleListData = () => {
    const [search, setSearch] = useState('')
    const {countries} = useCountryData()
    const {peoples, loading} = usePeopleData()

    const peopleList = useMemo(() => {
        const regex = new RegExp(search)
        return peoples?.searchResults
            .filter(i => regex.test(i.first_name) || regex.test(i.last_name))
            .map(i => ({
            ...i,
            countryName: countries[i.country].name,
            age: new Date().getFullYear() - new Date(i.date_of_birth).getFullYear(),
            flag: countries[i.country].flag
        })) ?? []
    }, [countries, peoples, search])

    return {
        search,
        setSearch,
        countries,
        loading,
        peopleList,
        peopleCount: peoples?.totalResultCounter
    }
}