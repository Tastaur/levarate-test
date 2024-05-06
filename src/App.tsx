import React from "react";
import {useCountryData} from "./hooks/useCountryData";
import {usePeopleData} from "./hooks/usePeopleData";

const App: React.FunctionComponent = () => {
    const {countries} = useCountryData()
    const {peoples, setSearch, search, loading} = usePeopleData()
    return (
        <div className="pageWrapper">
            <p>Search Component</p>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
            <p>List Component</p>
            <div className="listWrapper">
                {loading ? <div>Loading...</div> : peoples?.searchResults.map(i => <div key={i.id}>
                    <p>{i.first_name} {i.last_name} ({countries[i.country]?.name})</p>
                    <img className="flag" height={50} src={countries[i.country]?.flag} alt="Flag alt"/>
                </div>)}
            </div>
            <p>Found results: {peoples?.searchResultCount}</p>
            <p>Total results: {peoples?.totalResultCounter}</p>
        </div>
    );
};

export default App;
