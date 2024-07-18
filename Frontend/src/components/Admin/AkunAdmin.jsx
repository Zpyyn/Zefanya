    import { useEffect, useState } from "react";
    import axiosClient from "./../../axiosClient";
    import { NavLink } from "react-router-dom";

    const AkunAdmin = () => {
        const [user, setUser] = useState([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            getAdmin();
        }, []);

        const onDelete = (u) => {
            if (!window.confirm("yakin ingin menghapus akun ini?")) {
                return;
            }
            axiosClient.delete(`/admin/${u.id}`).then((response) => {
                alert("Akun berhasil dihapus.");
                console.log(response.data);
                getAdmin();
            });
        };

        const getAdmin = () => {
            setLoading(true);
            axiosClient
                .get("/admin")
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data.data);
                })
                .catch(() => {
                    setLoading(false);
                });
        };

        return (
            <div className=" w-full text-dark">
                <div className=" bg-[#FAF5E8] m-12 drop-shadow-xl px-5 max-h-[85vh] overflow-auto relative">
                    <div className=" sticky top-0 bg-[#FAF5E8] pt-5 pb-4">
                        <p className="title text-4xl font-bold">Akun Admin</p>
                        <div className=" flex gap-4 place-content-between">
                            <p className=" text-md font-normal italic">
                                Daftar akun admin yang terdaftar
                            </p>
                            <NavLink to="NewAdmin">
                                <button className=" mr-14 flex gap-2 justify-center items-center bg-dark text-light rounded-full p-1 text-md">
                                    <p className="pl-2">tambah akun</p>
                                    <span className=" material-symbols-outlined bg-light text-dark rounded-full">
                                        add
                                    </span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <table className="w-full text-center border-separate pb-5">
                        <thead className="sticky top-28 bg-[#FAF5E8]">
                            <tr className="">
                                <th>ID</th>
                                <th>Pembuat/Nama asli</th>
                                <th>Username</th>
                                <th>Hapus Akun</th>
                            </tr>
                            <tr>
                                <th className="bg-dark h-[0.5px]" colSpan="6"></th>
                            </tr>
                        </thead>
                        {loading && (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center text-2xl"
                                    >
                                        loading
                                    </td>
                                </tr>
                            </tbody>
                        )}
                        {!loading && (
                            <tbody>
                                {user.map((u) => (
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.nama_asli}</td>
                                        <td>{u.username}</td>
                                        <td>
                                            <button
                                                className="bg-dark rounded text-light px-3 p-1"
                                                onClick={(ev) => onDelete(u)}
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        );
    };

    export default AkunAdmin;
