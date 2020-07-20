import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Создается mstp, дабы не указывать его всегда в компоненте, который будем передавать в хок.
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
// HOC. Принцип работы предельно прост, но в то же время сложен для понимания.
// Согласно официальной документации - HOC (High Order Component), это функция, которая принимает
// компонент, и возвращает новый.
// Хоки обычно называют с приставкой with, так как они наделяют чем-либо (withAuthRedirect, withRouter).
// Данный хок наделяет компонент проверкой на авторизованность.

export const withAuthRedirect = ( Component ) => { // Получаем на входе компонент. Его пишем с большой буквы.
    
    class RedirectComponent extends React.Component { // Создаем контейнерный компонент.
        render () {
            if (!this.props.isAuth) return <Redirect to='/login'/> // Проверка на аутентификацию.
            return <Component {...this.props}/> // Не забываем передать пропсы которые нам пришли из mstp.
        }
    }

    let withAuthRedirectComp = connect(mapStateToPropsForRedirect)(RedirectComponent)// Коннектим.

    return withAuthRedirectComp;
} 