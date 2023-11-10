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

// экспортируем $ уже насыщенную методами и функционалом из modules
export default $;