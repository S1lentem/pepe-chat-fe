import { AnimatedContainer } from "components/animated-container";
import { useGetUsersQuery } from "hooks/api-hooks/use-users-api";

export const HomeView = () => {
    const { result: activeUsers, queryId } = useGetUsersQuery();

    return (
        <AnimatedContainer 
            className="home-container"
            queryIds={[queryId]}
        >
            <h1>Welcome to the PepeChat</h1>
            <h3>Active users:   </h3>
            <div>{ 
                activeUsers?.map(user => 
                    <div key={user.id}> 
                        {user.username + ' | ' + user.email}
                    </div>    
                ) 
            }</div>
        </AnimatedContainer>
    );
}