import { useState } from 'react';
import DefaultRecommendedBooks from "../components/DefaultRecommendedBooks";
import SearchResults from "../components/SearchResults";
import SearchBar from '../components/SearchBar';

export default function MainDashboard() {
    const [query, setQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    function handleSearch() { //Temporary- you'll have to call the api here
        if (query.trim() === '') return;
        setSearchTerm(query);
        setIsSearching(true);
    }


    return (
        <div style={{ minHeight: '100vh' }} className="bg-light p-4 p-lg-5">
            <div className="container-xl">
                <header className="mb-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h1 className="h2 fw-bold">My Offlib Dashboard</h1>
                            <p className="small text-muted mt-1">
                                Explore recommended reads or search the library.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <SearchBar
                            query={query}
                            setQuery={setQuery}
                            isLoading={isSearching}
                            onSearch={handleSearch}
                        />
                    </div>
                </header>

                <main>
                    {isSearching ? (
                        <SearchResults query={searchTerm} />
                    ) : (
                        <DefaultRecommendedBooks />
                    )}
                </main>
            </div>
        </div>
    );
}
