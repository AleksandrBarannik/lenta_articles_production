                Для использование webpack Надо:

1) Запустить PowerShell от имени администратора
2) Ввести:  Set-ExecutionPolicy RemoteSigned
3) Ввести Y для подтверждения

                 Все что нужно установить:

npm i -D webpack@5.69.1 webpack-cli@4.10.0 @types/webpack@5.28.0
npm i -D html-webpack-plugin@5.5.0
npm  i -D typescript@4.5.5 ts-loader@9.2.6

    //Для возможности создания webpack.config.ts
npm  i -D  ts-node@10.5.0 webpack-dev-server@4.7.4  @types/node@17.0.21
    // После найстройки конфигурации TypeScript
npm  i -D  webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2

    //React ets
npm i react@17.0.2 react-dom@17.0.2
npm i react-router-dom@6.2.1
npm i -D @types/react@17.0.39  @types/react-dom@17.0.11
npm i -D @types/react-router-dom@5.3.3

    //CSS
npm install  sass-loader@12.6.0 sass@1.49.9  style-loader@3.3.1  css-loader@6.6.0  --save-dev

    //Для разделения стилей в отдельныый файл(при сборке)
npm install --save-dev mini-css-extract-plugin@2.5.3

    //Для работы с svg файлами
npm install  @svgr/webpack@6.2.1 --save-dev

    //Работа с файлами jpeg;png;ets
npm install file-loader@6.2.0  --save-dev

    //Для работы с переключением языков
npm install react-i18next@11.15.5  i18next@21.6.11  --save
npm install i18next-browser-languagedetector@6.1.3 --save
    //Для асинхронной подгрузки нужного языка
npm install i18next-http-backend@1.3.2 --save

    //Для автоматического обновления
    //в браузере после изменения в коде омпонента
npm i -D react-refresh@0.12.0
npm i -D @pmmmwh/react-refresh-webpack-plugin@0.5.5

    //Преобразует код из одних стандартов в другие
npm i -D babel-loader@8.2.3 @babel/core@7.17.5
npm i -D  babel-plugin-i18next-extract@0.8.3
npm i -D @babel/preset-env@7.16.11













