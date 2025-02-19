import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="p-6">
            <h2 className="text-3xl mb-6">All Categories</h2>
            {
                categories.map(category=> <Link to={`/category/${category.id}`} className="block text-xl font-semibold mt-2" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;