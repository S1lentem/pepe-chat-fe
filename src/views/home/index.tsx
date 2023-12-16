import { useGetUsersQuery } from "core/api-slicer"

export const HomeView = () => {
    const {data: activeUsers, isLoading} = useGetUsersQuery();

    return (
        <div className="home-container">
            <h1>Welcome on the PepeChat</h1>
            <h3>Active users:   </h3>
            { activeUsers ? (
                activeUsers!.length !== 0 ? (
                    activeUsers!.map(user => 
                        <div key={user.id}> 
                            {user.username + ' | ' + user.email}
                        </div>    
                    ) 
                    ) : (
                        <p>active peoples</p>
                    )
            ) : (
                <div>
                    Loading...
                </div>
            )
                
            }
        </div>
    );
}