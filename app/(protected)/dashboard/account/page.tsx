import {auth, signOut} from "@/auth";

const Account = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";

                await signOut();

            }}>
                <button type="submit">
                    Log out
                </button>
            </form>
        </div>
    )
}

export default Account