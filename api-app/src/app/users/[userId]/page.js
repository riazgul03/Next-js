import getUsers from "../../../../services/getUsers"

export default async function Page(props) {
    const getUserList = getUsers();
    const users = await getUserList;
    const currantId = props.params.userId;
    const userData = users[currantId - 1];
    console.log(users[currantId - 1]);

    return (
        <div>
            <h3>Users Details Page</h3>
            <h4>Id : {userData.id}</h4>
            <h4>Name : {userData.name}</h4>
            <h4>Website : {userData.website}</h4>

        </div>
    )
}

export async function generateStaticParams() {
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user => ({
        userId: user.id.toString()
    }))
}