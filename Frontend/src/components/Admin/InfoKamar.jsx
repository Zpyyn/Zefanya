import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { Link } from "react-router-dom";

const InfoKamar = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {   
        getInfo();
    }, []);

    const getInfo = () => {
        setLoading(true);
        axiosClient
            .get("/kamar")
            .then(({ data }) => {
                setLoading(false);
                const modifiedData = data.data.map((kamar) => ({
                    ...kamar,
                    statusTerisi: kamar.terisi ? "Terisi" : "Tidak Terisi",
                    penghuni: kamar.penghuni || "-",
                    no_telp: kamar.no_telp || "Tidak ada Nomor",
                }));
                setInfo(modifiedData);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    return (
        <div className=" w-full text-dark">
            <div className=" bg-[#FAF5E8] m-12 drop-shadow-xl px-5 max-h-[85vh] overflow-auto relative">
                <div className=" sticky top-0 bg-[#FAF5E8] pt-5 pb-7">
                    <p className="title text-4xl font-bold">Informasi Kamar</p>
                    <p className=" text-md font-normal italic">
                        Tabel Mengenai kamar dan penghuninya
                    </p>
                </div>

                <table className="w-full text-center border-separate pb-4">
                    <thead className="">
                        <tr className="">
                            <th>No Kamar</th>
                            <th>Status</th>
                            <th>Penghuni</th>
                            <th>No Telp.</th>
                            <th>Ubah</th>
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
                            {info
                                .slice()
                                .reverse()
                                .map((i) => (
                                    <tr key={i.id} className="">
                                        <td>{i.no_kamar}</td>
                                        <td>{i.statusTerisi}</td>
                                        <td>{i.penghuni}</td>
                                        <td>{i.no_telp}</td>
                                        <td>
                                            <Link className="bg-dark rounded text-light px-3 p-1" to={'/admin/InfoKamar/'+ i.id}>
                                                Ubah
                                            </Link>
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

export default InfoKamar;
