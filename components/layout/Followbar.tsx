import useUsers from "@/hooks/useUsers"
import Avatar  from "../Avatar"

const Followbar = () => {
    const {data: users = [] } = useUsers();

    if (users.lenght === 0) {
        return null;
    }

    return (
        <div className = "px-6 py-4 hidden lg:block bg-orange-100">
            <div className = "bg-orange-200 rounded-xl p-4">
                <h2 className = "text-amber-900 text-xl font-semibold">Suggested Bakers</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {users.map((user: Record<string, any>) => (
                        <div key = {user.id} className = "flex flex-row gap-4">
                            <Avatar userId={user.id}/>
                            <div className = "flex flex-col">
                                <p className = "text-rose-400 font-semibold text-sm">{user.name}</p>
                                <p className = "text-orange-400 text-sm">
                                    @{user.username}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Followbar