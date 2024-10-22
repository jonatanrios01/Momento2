import { MoviesGrid } from "../Components/MoviesGrid";
import { Navbar } from "../Components/Navbar";
import { useQuery } from "../Hooks/useQuery";

export function LandingPage () {
    const query = useQuery();
     const search = query.get("search");

    return (
        <div>
            <Navbar/>
            <MoviesGrid key = {search} search = {search} />
        </div>
        
    )
}