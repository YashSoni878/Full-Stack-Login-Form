import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is to show the login person name dynamically
export const storeUser = (data) => {
    localStorage.setItem("user", JSON.stringify({
        username: data.user.username,
        jwt: data.jwt,
    }));
};

export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""';
    return JSON.parse(stringifiedUser || {});
    // return {username: 'Yash'};
};

export const Protector = ({Component}) => {
    const navigate = useNavigate();
    const { jwt } = userData();

    useEffect(() => {
        if(!jwt) {
            navigate("/login");
        }
    }, [navigate, jwt]);

    return <Component/>;
};