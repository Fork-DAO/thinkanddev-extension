# byDyorSide
Extensión para validación de vulnerabilidades en smart contracts

 * Validación de Smart Contracts verificados
 * Analisis de seguridad y porcentaje de riesgo
 * Detalle de vulnerabilidades para la toma de decisiones

## Visión General 

### Instalación

* Acceder a Chrome
* Ingresar el buscador de extensiones desde https://chrome.google.com/webstore
* Descargar la extensión byDYORside 
 
### Cómo utilizar la extensión web

Una vez instalada en su navegador Chrome la aplicación está lista para comenzar a realizar análisis sobre los contratos con los que el usuario esté por interactuar. 

_La aplicación actúa antes de que el usuario confirme cualquier transacción (ya sea de firma, transferencia de tokens, swaps, etc) brindando en el momento el resultado del análisis para que pueda tomar desiciones en base a los niveles de riesgo detectados._

## Learn More

byDYORside ejecuta un análisis interno para obtener un reporte que permita determinar el nivel de riesgo asociado. Estos niveles se muestran al usuario a través de un sistema de semáforos: 

* ROJO (Riesgo Alto): Indica que el resultado del análisis muestra vulnerabilidades importantes que pueden afectar la seguridad del usuario.

* AMARILLO (Riesgo Medio): Indica la ausencia de errores graves pero advierte de la presencia de algunas irregularidades que pueden llegar a afectar en menor medida al usuario. 

* VERDE(Riesgo Bajo): Indica la ausencia de errores graves y medios. Puede presentar warnings u oportunidades de optimización que no afectan la seguridad del usuario de ninguna manera. 
 
## Herramientas de análisis 

byDYORside utiliza distintas herramientas para analizar los contratos: 

* Slither: Marco de análisis estático de Solidity y detector de vulnerabilidades para auditar contratos inteligentes.
 
* AI: ChatGPT es un prototipo de chatbot de inteligencia artificial desarrollado en 2022 por OpenAI que se especializa en el diálogo. El chatbot es un gran modelo de lenguaje, ajustado con técnicas de aprendizaje tanto supervisadas como de refuerzo. Utilizamos la API para obtener reportes de seguridad de un smart contract.  

## Código Abierto

byDYORside es open source y se encuentra al alcance de todos los que deseen acceder al código en el repositorio:  

## License

byDYORside corre bajo la licencia [MIT License](LICENSE).

## Legal

La información brindada por byDYORside es solo informativa, no se guardan de ninguna manera los datos de la wallet que interactúa con la aplicación. La desición final de ejecutar o no la transacción desde wallet queda finalmente bajo la responsabilidad del usuario. 
