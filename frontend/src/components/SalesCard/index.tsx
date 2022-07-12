import NotificationButton  from '../NotificationButton'
import './styles.css'

function SelesCard() {
    return(
        <div className="dsmeta-Card">
                    <h2 className="dsmeta-sales-title">Vendas</h2>
                    <div className="dsmeta-form-control-conteiner">
                        <input className="dsmeta-form-control" type="text" />
                    </div>
                    <div className="dsmeta-form-control-conteiner">
                        <input className="dsmeta-form-control" type="text" />
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
                                <tr>
                                    <td className="show992">#456</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btm-conteiner">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#456</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btm-conteiner">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#456</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btm-conteiner">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#456</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btm-conteiner">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#456</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Anakin</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="dsmeta-red-btm-conteiner">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default SelesCard