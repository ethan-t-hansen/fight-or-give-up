"use client";

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
  

const HomeSearch = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    return (
        <div className='search-wrap'>
            <div className="search-container">
                <Link href={{
                    pathname: '/search',
                    query: { query: searchTerm }
                }} className="search-button">
                    <i className="material-icons">search</i>
                </Link>
                <input
                    id="search-bar-1"
                    className="search-bar"
                    type="search"
                    value={searchTerm}
                    placeholder="Enter a food..."
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default HomeSearch
