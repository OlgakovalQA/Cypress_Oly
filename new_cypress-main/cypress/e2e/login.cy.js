describe ('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
    it('Верный пароль и неверный логин', function () {
        cy.visit('/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })
   
   it('Неверный пароль и верный логин', function () {
    cy.visit('/');
    cy.get('#mail').type('german@dolnukov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

 })

 it('Проверка, что в логине есть @', function () {
    cy.visit('/');
    cy.get('#mail').type('germandolnukov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it('Проверка восстановления пароля', function () {
    cy.visit('/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnukov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Проверка, что в логине есть строчная буква', function () {
    cy.visit('/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

})
     //План
     //Найти поле логин и ввести правильный логин
     //Найти поле пароль и ввести правильный пароль
     //Найти кнопку войти и нажать войти
     //Проверить что авторизация прошла успешно
     // Проверить что видна авторизация пользователю
     // Проверить что крестик есть и виден пользователю
 
 
 