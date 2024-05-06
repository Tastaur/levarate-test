import {useEffect, useState} from "react";
import {getPeople} from "../DataApi";
import {useDebounce} from "./useDebounce";
import {GetPeopleResponse} from "../DataApi/people.interface";


export const usePeopleData = () => {
    const [peoples, setPeoples] = useState<GetPeopleResponse | null>(null)
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const [loading, setIsLoading] = useState(false)

    const debouncedSearch = useDebounce(search, 100);

    useEffect(() => {
        setIsLoading(true)
        new Promise<GetPeopleResponse>((resolve) => {
            const data = getPeople({search: debouncedSearch})
            resolve(data)
        }).then(setPeoples)
            .catch(() => setError('Country not found'))
            .finally(() => setIsLoading(false))

    }, [debouncedSearch]);

    return {
        peoples,
        setSearch,
        error,
        search,
        loading
    }
}