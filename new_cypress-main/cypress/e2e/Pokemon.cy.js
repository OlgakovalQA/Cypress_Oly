describe ('Покупка аватара', function () {

    it('Покупка нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[type="email"]').type('USER_LOGIN');//Ввести логин
         cy.get('input[type="password"]').type('USER_PASSWORD');//Ввести пароль
         cy.get('button[type="submit"]').click();
         cy.wait(2000);
         cy.get('.header__container > .header__id').click(); //кликаем на аву тренера
         cy.get('[href="/shop"]').click();//Кликаем на магазин
         cy.get('.available > button').first().click({ force: true });
         cy.get('.credit').type('4620869113632996');//Ввожу номер карты
         cy.get('.k_input_date').type('1225');   
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_name').type('GERMAN DOLNIKOV');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click(); 
         cy.contains('Покупка прошла успешно').should('be.visible');


    })
    })


   

