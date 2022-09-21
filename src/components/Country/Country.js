import React from 'react';
import './Country.css'


const Country = (props) => {
    console.log(props.country);
    const { area, name, cca2, region, population, flags, capital, callingCodes, startOfWeek, unMember, independent, continents

    } = props.country;
    return (
        <div className='col'>
            <div className="country_body py-3 rounded-4">
                <div className='pb-4'>
                    <img src={flags.png} alt="country flag" />
                </div>
                <div className='text-start px-5'>
                    <h3>Name: {name.common}, {cca2}</h3>
                    <p className="fw-semibold">Capital: {capital}</p>
                    <p className="fw-semibold">Population: {population}</p>
                    <p className="fw-semibold">Total Area: {area}KM</p>
                    <p className="fw-semibold">Region: {region}</p>
                    <p className="fw-semibold">Independent: {independent ? "Yes" : "No"}</p>
                    <p className="fw-semibold">UN Member: {unMember ? "Yes" : "No"}</p>
                    <p className="fw-semibold">start Of Week: {startOfWeek}</p>
                    <p className="fw-semibold">Country Code: {callingCodes}</p>
                    <p className="fw-semibold">continents: {continents}</p>

                </div>
            </div>
        </div>
    );
};

export default Country;
