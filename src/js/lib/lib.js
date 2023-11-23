// здесь собираем библиотеку
// добавляем в функцию $ разные методы из папки modules

import $ from './core';
import './modules/display';
import './modules/classes';
import './modules/attributes';
import './modules/actions';
import './modules/handlers';
import './modules/effects';
import './components/dropdown';
import './components/modal';
import './components/tabs';
import './components/accordion';
import './components/carousel';
import './services/requests';

// экспортируем $ уже насыщенную методами и функционалом из modules
export default $;