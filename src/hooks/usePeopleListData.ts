import {useCountryData} from "./useCountryData";
import {usePeopleData} from "./usePeopleData";

export const usePeopleListData = () => {
    const {countries} = useCountryData()
    const {peoples, loading, setSearch, search} = usePeopleData()



    return {
        search,
        setSearch,
        countries,
        loading,
        peoples
    }
}