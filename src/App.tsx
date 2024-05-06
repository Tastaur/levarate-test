import React from "react";
import {usePeopleListData} from "./hooks/usePeopleListData";

const App: React.FunctionComponent = () => {
    const {
        peopleList,
        loading,
        setSearch,
        search,
        peopleCount
    } = usePeopleListData()

    return (
        <div className="pageWrapper">
            <p>Search Component</p>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
            <p>List Component</p>
            <div className="listWrapper">
                {loading ? <div>Loading...</div> : peopleList.map(i => <div key={i.id}>
                    <p>{i.first_name} {i.last_name} ({i.country}, {i.age})</p>
                    <img className="flag" height={50} src={i.flag} alt="Flag alt"/>
                </div>)}
            </div>
            <p>Found results: {peopleList.length}</p>
            <p>Total results: {peopleCount}</p>
        </div>
    );
};

export default App;
