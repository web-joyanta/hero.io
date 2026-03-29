import Swal from "sweetalert2";

const getLocalStorage = () => {
    const allApps = localStorage.getItem("appList");
    if (allApps) return JSON.parse(allApps);
    return [];
};

const setLocalStorage = (id) => {
    const allApps = getLocalStorage();
    const isAlreadyExist = allApps.includes(id);
    if (!isAlreadyExist) {
        allApps.push(id);
        localStorage.setItem("appList", JSON.stringify(allApps));
        return Swal.fire({
            title: "Installed Successfully!",
            icon: "success",
            draggable: true
        });
    } else {
        return (
            Swal.fire({
                title: "Already Exist!",
                icon: "error",
                draggable: true
            })
        )
    }
};

export { getLocalStorage, setLocalStorage };