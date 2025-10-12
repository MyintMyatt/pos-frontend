import {useEffect, useState} from "react";
import {ChevronLeft, ChevronRight, Plus} from "lucide-react";
import UserPopup from "@/features/admin/user/component/UserPopup";
import {userApi} from "@/features/admin/user/api/userService";
import {StatusPopup} from "@/component/StatusPopUp";
import Lottie from "lottie-react";
import successIcon from "@/assets/Success.json";
import errorIcon from "@/assets/Error.json";
import {UserList} from "../component/UserList";

const User = () => {
    const [showUserCreatePopUp, setShowUserCreatePopUp] = useState(false);
    const [showUserUpdatePopUp, setShowUserUpdatePopUp] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [btnLoading, setBtnbtnLoading] = useState(false);
    const [usersListLoading, setUsersListLoading] = useState(true);
    const [showStatusPopUp, setShowStatusPopUp] = useState(false);
    const [resMsg, setResMsg] = useState("");
    const [icon, setIcon] = useState();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    //functions that related user retrieve
    const fetctUsers = async () => {
        try {
            const res = await userApi.fetchAllUsers();
            console.log(res.data.data);
            setUsers(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setUsersListLoading(false);
        }
    };
    useEffect(() => {
        fetctUsers();
    }, []);

//functions that related user create
    const handleSubmit = async (data) => {
        setBtnbtnLoading(true);
        try {
            const response = await userApi.createUser(data);
            setIcon(successIcon);
            setResMsg(response.data?.message || "Successfully registered!");
            fetctUsers();
        } catch (error) {
            setIcon(errorIcon);
            setResMsg(error.response?.data?.message || "Registration failed!");
        } finally {
            setShowUserCreatePopUp(false);
            setShowStatusPopUp(true);
            setBtnbtnLoading(false);
        }
    };

//functions that related user update
    const handleUpdateSubmit = async (data) => {
        setBtnbtnLoading(true);
        try {
            const response = await userApi.updateUser(selectedUser.userEmail, data);
            setIcon(successIcon);
            setResMsg(response.data?.message || "User updated successfully!");
            fetctUsers();
        } catch (error) {
            setIcon(errorIcon);
            setResMsg(error.response?.data?.message || "Update failed!");
        } finally {
            setShowUserUpdatePopUp(false);
            setShowStatusPopUp(true);
            setBtnbtnLoading(false);
        }
    };

// for edit btn in user list
    const handleClickEditBtn = (user) => {
        setShowUserUpdatePopUp(true);
        setSelectedUser(user);
        console.log('click updateUser => ' + user.userEmail);
    }

    const handleStatusPopUp = () => {
        setShowStatusPopUp(false);
        setShowUserCreatePopUp(false);
    };

    return (
        <div className="h-fit">
            <button
                className="fixed right-10 bottom-10 p-5 bg-black rounded-full shadow-2xl text-white"
                onClick={() => setShowUserCreatePopUp(true)}
            >
                <Plus/>
            </button>

            {/*user list*/}
            <UserList users={users} loading={usersListLoading} updateFunc={handleClickEditBtn}/>

            {/*pagination buttons and page number*/}
            <div className="flex item-center justify-center gap-5 mt-5 ">
                <button className="p-2 md:p-3 bg-gray-200 text-center rounded-md hover:bg-gray-300 cursor-pointer"
                        onClick={() => setPage(page === 1 ? page : page - 1)}>
                    <ChevronLeft size={25}/>
                </button>
                <p className="py-4">{page}</p>
                <button className="p-2 md:p-3 bg-gray-200 text-center rounded-md hover:bg-gray-300 cursor-pointer"
                        onClick={() => setPage(page + 1)}>
                    <ChevronRight size={25}/>
                </button>
            </div>

            {/*create user popup*/}
            {showUserCreatePopUp && (
                <UserPopup
                    title={"Register User"}
                    onClose={() => setShowUserCreatePopUp(false)}
                    onSubmit={handleSubmit}
                    loading={btnLoading}
                />
            )}

            {/*update user popup*/}
            {showUserUpdatePopUp && selectedUser && (
                <UserPopup
                    title={"Update User"}
                    onClose={() => setShowUserUpdatePopUp(false)}
                    onSubmit={handleUpdateSubmit}
                    loading={btnLoading}
                    userData={selectedUser}
                    isUpdate={true}
                />)
            }

            {/*gif pop up*/}
            {showStatusPopUp && (
                <StatusPopup statusMessage={resMsg} onClose={handleStatusPopUp}>
                    <Lottie
                        animationData={icon}
                        loop={true}
                        autoplay={true}
                        style={{width: 200, height: 200}} // Optional: set styles
                    />
                </StatusPopup>
            )}
        </div>
    );
};

export default User;
