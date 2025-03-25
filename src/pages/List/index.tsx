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
        municipio: "",
        startDate: "",
        endDate: ""
    });

    const cargos = ["Prefeito", "Secretário de Finanças", "Contador"];

    useEffect(() => {
        setIsLoading(true);
        formService.getMunicipios().then(response => {
            setMunicipios(response.municipios || []);
        }).catch(error => console.error("Failed to get municipios:", error));
        setIsLoading(false);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        formService.getAllForms().then(response => {
            setData(response.forms || []);
            setFilteredData(response.forms || []);
        }).catch(error => console.error("Failed to get forms:", error));
        setIsLoading(false);
    }, []);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        let filtered = data.filter((form) =>
            (filters.id ? form.id.toString().includes(filters.id) : true) &&
            (filters.nome ? form.nome.toLowerCase().includes(filters.nome.toLowerCase()) : true) &&
            (filters.cargo ? form.cargo === filters.cargo : true) &&
            (filters.municipio ? form.municipio === filters.municipio : true) &&
            (filters.startDate ? new Date(form.created_at) >= new Date(filters.startDate) : true) &&
            (filters.endDate ? new Date(form.created_at) <= new Date(filters.endDate) : true)
        );
        setFilteredData(filtered);
    };

    const clearFilters = () => {
        setFilters({ id: "", nome: "", cargo: "", municipio: "", startDate: "", endDate: "" });
        setFilteredData(data);
    };

    return (
        <Content>
            <div className="header">
                <h1>Formulários</h1>
                <ButtonSettings onClick={() => navigate("/")}>
                    <FaUpRightFromSquare /> <span style={{ marginLeft: 10 }}>Adicionar</span>
                </ButtonSettings>
            </div>
            <FilterRow>
                <Input type="text" name="id" value={filters.id} onChange={handleFilterChange} placeholder="Filtrar ID" />
                <Input type="text" name="nome" value={filters.nome} onChange={handleFilterChange} placeholder="Filtrar Nome" />
                <Select name="cargo" value={filters.cargo} onChange={handleFilterChange}>
                    <option value="">Todos</option>
                    {cargos.map(cargo => <option key={cargo} value={cargo}>{cargo}</option>)}
                </Select>
                <Select name="municipio" value={filters.municipio} onChange={handleFilterChange}>
                    <option value="">Todos</option>
                    {municipios.map(municipio => <option key={municipio} value={municipio}>{municipio}</option>)}
                </Select>
                <Input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
                <Input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
                <ButtonSettings onClick={applyFilters}>Filtrar</ButtonSettings>
                <ButtonSettings onClick={clearFilters}>Limpar</ButtonSettings>
            </FilterRow>
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
                            <th>Data de Criação</th>
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
                                    <td>{new Date(form.created_at).toLocaleDateString()}</td>
                                    <td><FaFilePdf className="btn-pdf" /></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} style={{ textAlign: "center", padding: "10px" }}>Nenhum resultado encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </StyledTable>
            </TableContainer>
            {isLoading && <Loading />}
        </Content>
    );
};

export default FormTable;
