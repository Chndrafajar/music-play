import {
    FaDownload,
    FaMessage,
    FaMoneyCheckDollar,
    FaStar,
    FaUser,
} from "react-icons/fa6";
import { IoHome, IoLogOut } from "react-icons/io5";

const UserMenu = [
    {
        link: "/prototype/dashboard",
        icon: <IoHome />,
        text: "Home",
    },
    {
        link: "",
        icon: <FaStar />,
        text: "Favorite",
    },
    {
        link: "",
        icon: <FaDownload />,
        text: "Download",
    },
    {
        link: "",
        icon: <FaMessage />,
        text: "Message",
    },
];

const UserOthers = [
    {
        link: "/prototype/subscriptionPlan",
        icon: <FaMoneyCheckDollar />,
        text: "Payments",
    },
    {
        link: "",
        icon: <FaUser />,
        text: "Your Profile",
    },
    {
        link: "",
        icon: <IoLogOut />,
        text: "Logout",
    },
];

export { UserMenu, UserOthers };
