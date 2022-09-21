import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className='text-white'>
            <h3 className='text-capitalize fw-bold my-5'>Total {countries.length} countries Found</h3>

            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        countries.map(country =>
                            <Country
                                country={country}>
                            </Country>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;
