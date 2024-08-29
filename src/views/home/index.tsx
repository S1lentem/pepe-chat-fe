import { AnimatedContainer } from "components/animated-container";
import { useGetUsersRequest } from "hooks/api-hooks/use-users-api";

export const HomeView = () => {
    const activeUsers = useGetUsersRequest();

    return (
        <AnimatedContainer className="home-container">
            <h1>Welcome to the PepeChat</h1>
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
        </AnimatedContainer>
    );
}