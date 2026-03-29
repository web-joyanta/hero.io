import Swal from "sweetalert2";

const getLocalStorage = () => {
    const allApps = localStorage.getItem("installedApps");
    if (allApps) return JSON.parse(allApps);
    return [];
};

const setLocalStorage = (id) => {
    const allApps = getLocalStorage();
    const isAlreadyExist = allApps.includes(id);
    if (!isAlreadyExist) {
        allApps.push(id);
        localStorage.setItem("installedApps", JSON.stringify(allApps));
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

const removeAppLocalStorage = (id) => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps"));
    const updated = storedApps.filter(appId => parseInt(appId) !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
}

export { getLocalStorage, setLocalStorage, removeAppLocalStorage };