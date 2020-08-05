import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
<article className="teacher-item">
<header>
<img src="https://avatars2.githubusercontent.com/u/38990510?s=400&u=9a67ab85804229db6ec973f2a0c56b698d259eee&v=4" alt="Jeremias"/>
<div>
    <strong>Jeremias Oliveira</strong>
    <span>Informatica</span>
</div>
</header>
<p>
Acredita piamente que a educação pode mudar vidas e passo a passo.
<br/> <br/>
Leva minha vida nesse trilho para me transformar e inspirar pessoas a alcançar também sua própria mudança.
</p>
<footer>
    <p>
        Preço por hora
        <strong>R$ 15,00</strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
    </button>
</footer>
</article>
)
}
export default TeacherItem;