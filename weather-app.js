/**
 * Voces de la Calle - Weather App Loader
 * Inicializa el widget de clima de forma independiente
 */
const WeatherApp = {
    init: function() {
        console.log("Weather System: Sincronizando con satélites...");
        this.initAlertSystem();
    },

    initAlertSystem: function() {
        // Lógica para el sistema de alertas meteorológicas
        const alertDisplay = document.getElementById('weather-alert');
        if (alertDisplay) {
            // Simulación de nivel de alerta (Normal)
            // En una etapa futura aquí se podría integrar una API de alertas en tiempo real
            alertDisplay.innerHTML = `
                <span class="alert-icon">🛡️</span> 
                <span class="alert-text">SISTEMA ATMOSFÉRICO: SIN ALERTAS CRÍTICAS</span>
            `;
        }
    }
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => WeatherApp.init());