import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
function UserResults() {
    // const [users, setUsers] = useState([]);

    const {users} = useContext(GithubContext);
    // useEffect(() => {
    //     fetchUsers()
    // }, []);

    // const fetchUsers = async () => {
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()
    //     setUsers(data);
    // }
    return (
        // <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        //     {
        //         users.map((user)=>(
        //             <UserItem key={user.id} user={user}/>
        //         ))
        //     }
        // </div>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))
            }
        </div>
    )
};

export default UserResults;