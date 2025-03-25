import React, { useEffect, useState } from "react";
import { Content, TableContainer, StyledTable, Box, ButtonSettings, Input, Select, FilterRow } from "./styles";
import formService from "../../services/formService";
import { useNavigate } from "react-router-dom";
import { FaUpRightFromSquare, FaFilePdf } from "react-icons/fa6";
import Loading from "../../components/Loading";


const FormTable = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); 

    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [municipios, setMunicipios] = useState<string[]>([]);

    const [filters, setFilters] = useState({
        id: "",
        nome: "",
        cargo: "",
        municipio: ""
    });

    const [isFiltered, setIsFiltered] = useState(false);

    const cargos = ["Prefeito", "Secretário de Finanças", "Contador"];

    useEffect(() => {
        setIsLoading(true);
        const getMunicipios = async () => {
            try {
                const response = await formService.getMunicipios();
                setMunicipios(response.municipios || []);
            } catch (error) {
                console.error("Failed to get municipios:", error);
            }
        };
        getMunicipios();
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await formService.getAllForms();
                setData(response.forms || []);
                setFilteredData(response.forms || []);
            } catch (error) {
                console.error("Failed to get forms:", error);
            }
        };
        getData();
    }, []);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        let filtered = data.filter((form) =>
            (filters.id ? form.id.toString().includes(filters.id) : true) &&
            (filters.nome ? form.nome.toLowerCase().includes(filters.nome.toLowerCase()) : true) &&
            (filters.cargo ? form.cargo === filters.cargo : true) &&
            (filters.municipio ? form.municipio === filters.municipio : true)
        );
        setFilteredData(filtered);
        setIsFiltered(true);
    };

    const clearFilters = () => {
        setFilters({ id: "", nome: "", cargo: "", municipio: "" });
        setFilteredData(data);
        setIsFiltered(false);
    };

    const handlePDF = () => {
        const downloadUrl = "https://drive.google.com/uc?export=download&id=1xJmbkQZHgw8nQvW6rkM9FdeNrYrHD2Vm";
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Londrina.pdf"); // Nome do arquivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Content>
            <div className="header">
                <div>
                    <h1>Formulários</h1>
                </div>
                <ButtonSettings onClick={() => navigate("/")}>
                    <FaUpRightFromSquare />
                    <span style={{ marginLeft: 10 }}>Adicionar</span>
                </ButtonSettings>
            </div>

            {/* Linha de Filtros */}
            <FilterRow>
                <Input
                    type="text"
                    name="id"
                    value={filters.id}
                    onChange={handleFilterChange}
                    placeholder="Filtrar ID"
                    disabled={isFiltered}
                />
                <Input
                    type="text"
                    name="nome"
                    value={filters.nome}
                    onChange={handleFilterChange}
                    placeholder="Filtrar Nome"
                    disabled={isFiltered}
                />
                <Select
                    name="cargo"
                    value={filters.cargo}
                    onChange={handleFilterChange}
                    disabled={isFiltered}
                >
                    <option value="">Todos</option>
                    {cargos.map((cargo) => (
                        <option key={cargo} value={cargo}>
                            {cargo}
                        </option>
                    ))}
                </Select>
                <Select
                    name="municipio"
                    value={filters.municipio}
                    onChange={handleFilterChange}
                    disabled={isFiltered}
                >
                    <option value="">Todos</option>
                    {municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>
                            {municipio}
                        </option>
                    ))}
                </Select>
                {isFiltered ? (
                    <ButtonSettings onClick={clearFilters}>Limpar</ButtonSettings>
                ) : (
                    <ButtonSettings onClick={applyFilters}>Filtrar</ButtonSettings>
                )}
            </FilterRow>
            
            {/* TAbela */}
            <TableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Cargo</th>
                            <th>Município</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((form) => (
                                <tr key={form.id}>
                                    <td>{form.id}</td>
                                    <td>{form.nome}</td>
                                    <td>{form.cpf}</td>
                                    <td>{form.cargo}</td>
                                    <td>{form.municipio}</td>
                                    <td>{form.email}</td>
                                    <td><FaFilePdf className="btn-pdf"  onClick={() => handlePDF()} /></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} style={{ textAlign: "center", padding: "10px" }}>
                                    Nenhum resultado encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </StyledTable>
            </TableContainer>

            {isLoading && (
                <Loading />
            )}
        </Content>
    );
};

export default FormTable;