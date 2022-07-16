import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/Notificaçao.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props={
    seleId: number;
}

function handClick(id : number){
    axios(`${BASE_URL}/seles/${id}/notification`)
        .then(resposta =>{
            toast.info("SMS enviado")
        })
    
}

function NotificationButton({seleId}: Props) {
    return (
        <div className="dsmeta-red-btm" onClick={()=> handClick(seleId)}>
            <img src={icon} alt="Notification" />
         </div>
    )
}

export default NotificationButton;