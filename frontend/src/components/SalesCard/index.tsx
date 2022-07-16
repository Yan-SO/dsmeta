import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SelesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const dmin= minDate.toISOString().slice(0, 10);
        const dmax= maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/seles?minDate=${dmin}&maxDate=${dmax}`)
            .then(resposta => {
                console.log(resposta.data.content)
                setSales(resposta.data.content)
            })
    }, [minDate, maxDate]);

    return (
        <div className="dsmeta-Card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div className="dsmeta-form-control-conteiner">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-form-control-conteiner">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th >Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sele => {
                            return (
                                <tr key={sele.id}>
                                    <td className="show992">{sele.id}</td>
                                    <td className="show576">{new Date(sele.date).toLocaleDateString()}</td>
                                    <td>{sele.sellerName}</td>
                                    <td className="show992">{sele.visited}</td>
                                    <td className="show992">{sele.deals}</td>
                                    <td>R$ {sele.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta-red-btm-conteiner">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SelesCard;