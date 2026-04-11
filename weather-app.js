/**
 * Voces de la Calle - Weather App Loader
 * Inicializa el widget de clima de forma independiente
 */
function loadWeatherWidget() {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadWeatherWidget);